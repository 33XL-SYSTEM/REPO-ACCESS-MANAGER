export interface MusicTrack {
  id: string;
  title: string;
  url: string;
  categoryId: string;
}

// Automatically detect all audio files in the public/musics folder
const musicFiles = import.meta.glob('/public/musics/*.{mp3,wav,ogg,m4a,flac}');

export const musics: MusicTrack[] = Object.keys(musicFiles).map((path) => {
  // path will be e.g. "/public/musics/music-01.mp3"
  // public folder contents are served from root "/"
  const url = path.replace('/public', '');
  
  // Extract just the filename e.g. "music-01.mp3"
  const filename = path.split('/').pop() || 'Unknown Track';
  
  // Format the title to look nice: remove extension, replace dashes with spaces, capitalize
  const rawTitle = filename.replace(/\.[^/.]+$/, "");
  const title = rawTitle
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());

  return {
    id: filename,
    title,
    url,
    categoryId: 'native',
  };
});

// Sort tracks alphabetically just in case
musics.sort((a, b) => a.title.localeCompare(b.title));
