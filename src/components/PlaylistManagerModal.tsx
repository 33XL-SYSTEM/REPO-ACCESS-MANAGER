import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, Pause, ChevronUp, ChevronDown, Trash2, EyeOff, X, Upload, FolderPlus, Folder, FolderOpen, ToggleLeft, ToggleRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useMusic } from '../context/MusicContext';

interface PlaylistManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlaylistManagerModal: React.FC<PlaylistManagerModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const {
    playlist,
    currentTrackIndex,
    isPlaying,
    importTrack,
    removeTrack,
    moveTrack,
    jumpToTrack,
    togglePlayPause,
    categories,
    createCategory,
    deleteCategory,
    moveTrackToCategory,
    toggleCategoryEnabled
  } = useMusic();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [newCategoryName, setNewCategoryName] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importTrack(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleCreateCategory = () => {
    if (newCategoryName.trim().length > 0) {
      createCategory(newCategoryName.trim());
      setNewCategoryName('');
    }
  };

  const toggleCollapse = (id: string) => {
    setCollapsedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const importedCount = playlist.filter(t => !categories.find(c => c.id === t.categoryId)?.isNative).length;

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-black/90 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
          <div>
            <h2 className="text-lg font-black tracking-widest text-white/90 font-mono">
              {t('playlist.title')}
            </h2>
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
              {importedCount}/33 {t('playlist.tracks_loaded')}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Action Bar */}
        <div className="p-4 border-b border-white/5 flex gap-2">
          <input 
            type="file" 
            accept="audio/*" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={importedCount >= 33}
            className="flex-1 py-2 px-4 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <Upload size={14} />
            {importedCount >= 33 ? t('playlist.full') : t('playlist.import_audio')}
          </button>
          
          <div className="flex flex-1 gap-2">
            <input 
              type="text"
              placeholder={t('playlist.create_category_placeholder')}
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreateCategory()}
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              onClick={handleCreateCategory}
              disabled={!newCategoryName.trim()}
              className="px-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:hover:bg-white/10 text-white rounded-lg flex items-center justify-center transition-colors"
              title={t('playlist.create_category_title')}
            >
              <FolderPlus size={16} />
            </button>
          </div>
        </div>

        {/* Track List Grouped by Categories */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4 custom-scrollbar">
          {categories.map((category) => {
            const isCollapsed = collapsedCategories[category.id];
            
            // Get original indices of tracks in this category
            const categoryTracks = playlist.map((track, index) => ({ track, index }))
                                         .filter(item => item.track.categoryId === category.id);

            return (
              <div key={category.id} className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
                {/* Category Header */}
                <div className="flex items-center justify-between p-3 bg-white/5 border-b border-white/5">
                  <button 
                    onClick={() => toggleCollapse(category.id)}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    {isCollapsed ? <Folder size={14} /> : <FolderOpen size={14} />}
                    <span className="font-bold text-sm tracking-wide uppercase">
                      {category.id === 'native' ? t('playlist.native_folder') : category.id === 'imported' ? t('playlist.imported_folder') : category.name}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 bg-white/10 px-1.5 py-0.5 rounded">
                      {categoryTracks.length}
                    </span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCategoryEnabled(category.id)}
                      className={`p-1.5 transition-colors ${category.isDisabled ? 'text-white/30 hover:text-white/50' : 'text-white hover:text-white/80'}`}
                      title={category.isDisabled ? t('playlist.enable_category') : t('playlist.disable_category')}
                    >
                      {category.isDisabled ? <ToggleLeft size={22} /> : <ToggleRight size={22} />}
                    </button>
                    
                    {!category.isNative && category.id !== 'imported' && (
                      <button
                        onClick={() => deleteCategory(category.id)}
                        className="p-1.5 text-white/30 hover:text-red-400 transition-colors"
                        title={t('playlist.delete_folder_title')}
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Tracks Container */}
                {!isCollapsed && (
                  <div className={`p-2 space-y-1 transition-opacity duration-300 ${category.isDisabled ? 'opacity-30 grayscale pointer-events-none' : 'opacity-100'}`}>
                    {categoryTracks.length === 0 ? (
                      <div className="text-center p-4 text-xs font-mono text-white/30">
                        {t('playlist.empty_folder')}
                      </div>
                    ) : (
                      categoryTracks.map(({ track, index }, catIndex) => {
                        const isCurrent = index === currentTrackIndex;
                        return (
                          <div 
                            key={track.id + index}
                            className={`group flex items-center justify-between p-2 rounded-lg transition-colors ${
                              isCurrent ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3 overflow-hidden flex-1">
                              <button
                                onClick={() => {
                                  if (isCurrent) togglePlayPause();
                                  else jumpToTrack(index);
                                }}
                                className={`w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-colors ${
                                  isCurrent && isPlaying ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/10 text-white hover:bg-white hover:text-black'
                                }`}
                              >
                                {isCurrent && isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
                              </button>
                              <div className="flex flex-col truncate">
                                <span className={`text-xs truncate font-medium ${isCurrent ? 'text-white' : 'text-white/80'}`}>
                                  {track.title}
                                </span>
                                {isCurrent && (
                                  <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">
                                    {t('playlist.playing_now')}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0">
                              
                              {/* Move to folder select */}
                              {!category.isNative && (
                                <select 
                                  className="bg-black/50 text-[10px] text-white/60 border border-white/10 rounded px-1 py-1 outline-none hover:text-white cursor-pointer mr-1 max-w-[80px]"
                                  value={category.id}
                                  onChange={(e) => moveTrackToCategory(index, e.target.value)}
                                  title={t('playlist.move_to_folder')}
                                >
                                  <option value="" disabled className="bg-black/90">
                                    {t('playlist.move_to_folder')}
                                  </option>
                                  {categories.map(c => (
                                    <option key={c.id} value={c.id} className="bg-black/90">
                                      {c.id === 'native' ? t('playlist.native_folder') : c.id === 'imported' ? t('playlist.imported_folder') : c.name}
                                    </option>
                                  ))}
                                </select>
                              )}

                              <button 
                                onClick={() => moveTrack(index, index - 1)}
                                disabled={catIndex === 0}
                                className="p-1.5 text-white/40 hover:text-white disabled:opacity-30 disabled:hover:text-white/40 transition-colors"
                                title="Move Up"
                              >
                                <ChevronUp size={14} />
                              </button>
                              <button 
                                onClick={() => moveTrack(index, index + 1)}
                                disabled={catIndex === categoryTracks.length - 1}
                                className="p-1.5 text-white/40 hover:text-white disabled:opacity-30 disabled:hover:text-white/40 transition-colors"
                                title="Move Down"
                              >
                                <ChevronDown size={14} />
                              </button>
                              <div className="w-px h-3 bg-white/10 mx-0.5"></div>
                              <button 
                                onClick={() => removeTrack(index)}
                                disabled={playlist.length <= 1}
                                className={`p-1.5 transition-colors disabled:opacity-30 ${
                                  track.id.startsWith('imported-') 
                                    ? 'text-red-400/60 hover:text-red-400 disabled:hover:text-red-400/60' 
                                    : 'text-white/40 hover:text-white disabled:hover:text-white/40'
                                }`}
                                title={track.id.startsWith('imported-') ? "Remove Track" : "Hide Track"}
                              >
                                {track.id.startsWith('imported-') ? <Trash2 size={14} /> : <EyeOff size={14} />}
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PlaylistManagerModal;
