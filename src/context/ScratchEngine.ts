export class ScratchEngine {
  private audioCtx: AudioContext | null = null;
  private forwardBuffer: AudioBuffer | null = null;
  private reverseBuffer: AudioBuffer | null = null;
  
  private activeSource: AudioBufferSourceNode | null = null;
  private continuousSource: AudioBufferSourceNode | null = null;
  private currentUrl: string | null = null;
  private isLoaded: boolean = false;

  private currentPlayheadTime: number = 0;
  private gainNode: GainNode | null = null;

  public init() {
    if (!this.audioCtx) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.connect(this.audioCtx.destination);
    }
  }

  public async loadTrack(url: string) {
    this.init();
    if (!this.audioCtx || this.currentUrl === url) return;

    this.isLoaded = false;
    this.currentUrl = url;

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const decodedBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);

      this.forwardBuffer = decodedBuffer;
      this.reverseBuffer = this.createReversedBuffer(decodedBuffer);
      this.isLoaded = true;
      console.log("[ScratchEngine] Track loaded and reversed buffers prepared.");
    } catch (err) {
      console.error("[ScratchEngine] Failed to load track:", err);
      this.isLoaded = false;
    }
  }

  private createReversedBuffer(buffer: AudioBuffer): AudioBuffer {
    if (!this.audioCtx) throw new Error("No AudioContext");
    const channels = buffer.numberOfChannels;
    const length = buffer.length;
    const sampleRate = buffer.sampleRate;

    const reverseBuffer = this.audioCtx.createBuffer(channels, length, sampleRate);
    for (let i = 0; i < channels; i++) {
      const dest = reverseBuffer.getChannelData(i);
      const src = buffer.getChannelData(i);
      for (let j = 0; j < length; j++) {
        dest[j] = src[length - 1 - j];
      }
    }
    return reverseBuffer;
  }

  public startScrub(time: number) {
    if (!this.isLoaded || !this.audioCtx || !this.forwardBuffer || !this.reverseBuffer) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.currentPlayheadTime = time;
    this.stopActiveSource();
  }

  public updateScrub(deltaSeconds: number) {
    if (!this.isLoaded || !this.audioCtx || !this.forwardBuffer || !this.reverseBuffer || !this.gainNode) {
       return this.currentPlayheadTime + deltaSeconds; // fallback return
    }

    const newTime = this.currentPlayheadTime + deltaSeconds;
    const maxTime = this.forwardBuffer.duration;
    
    if (newTime < 0 || newTime > maxTime) {
       this.stopActiveSource();
       this.currentPlayheadTime = Math.max(0, Math.min(newTime, maxTime));
       return this.currentPlayheadTime;
    }

    const directionForward = deltaSeconds >= 0;
    const velocity = Math.abs(deltaSeconds);
    
    // Convert velocity per frame (e.g. 16ms) to a playback rate
    // If deltaSeconds = 0.05 per 16ms frame, that's roughly 3x speed.
    // 0.016 sec real time -> deltaSeconds
    const estimatedPlaybackRate = Math.min(Math.max(velocity / 0.016, 0.1), 5.0);

    this.stopActiveSource();

    this.activeSource = this.audioCtx.createBufferSource();
    this.activeSource.buffer = directionForward ? this.forwardBuffer : this.reverseBuffer;
    this.activeSource.playbackRate.value = estimatedPlaybackRate;
    
    this.activeSource.connect(this.gainNode);

    // Calculate offset. If playing reverse buffer, offset is from the END.
    const offset = directionForward ? this.currentPlayheadTime : maxTime - this.currentPlayheadTime;
    
    // Play for a very short grain duration to emulate the scrub
    const grainDuration = 0.1; 
    
    try {
      this.activeSource.start(0, offset, grainDuration);
    } catch {
      // Ignore start errors
    }

    this.currentPlayheadTime = newTime;
    return this.currentPlayheadTime;
  }

  public stopScrub() {
    this.stopActiveSource();
  }

  private stopActiveSource() {
    if (this.activeSource) {
      try {
        this.activeSource.stop();
        this.activeSource.disconnect();
      } catch {
        // ignore
      }
      this.activeSource = null;
    }
  }

  public startContinuousReverse(time: number) {
    if (!this.isLoaded || !this.audioCtx || !this.reverseBuffer || !this.gainNode) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    this.stopContinuousReverse();
    
    this.continuousSource = this.audioCtx.createBufferSource();
    this.continuousSource.buffer = this.reverseBuffer;
    this.continuousSource.connect(this.gainNode);
    
    const maxTime = this.reverseBuffer.duration;
    const offset = maxTime - time;
    
    try {
      this.continuousSource.start(0, offset);
    } catch {
      // ignore
    }
  }

  public stopContinuousReverse() {
    if (this.continuousSource) {
      try {
        this.continuousSource.stop();
        this.continuousSource.disconnect();
      } catch {
        // ignore
      }
      this.continuousSource = null;
    }
  }
}

export const scratchEngine = new ScratchEngine();
