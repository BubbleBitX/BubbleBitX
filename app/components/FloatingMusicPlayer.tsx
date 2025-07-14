'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Music, Hand } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const musicTracks = [
  {
    id: 1,
    title: 'Calm Ambience',
    artist: 'Ambient Waves',
    src: '/media/calm-ambient-background-2-351472.mp3',
    description: 'Soothing ambient background music',
  },
  {
    id: 2,
    title: 'Silent Waves',
    artist: 'Ocean Sounds',
    src: '/media/silent-waves-instrumental-333295.mp3',
    description: 'Gentle waves and calming instrumentals',
  },
  {
    id: 3,
    title: 'Space Journey',
    artist: 'Cosmic Drift',
    src: '/media/space-120280.mp3',
    description: 'Ethereal space ambient music',
  },
];

const FloatingMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPointer, setShowPointer] = useState(false);
  const currentTrackIndex = useRef(new Date().getDay() % musicTracks.length);
  const [currentTrack, setCurrentTrack] = useState(musicTracks[currentTrackIndex.current]);

  // Handle track end
  const handleTrackEnd = useCallback(() => {
    currentTrackIndex.current = (currentTrackIndex.current + 1) % musicTracks.length;
    setCurrentTrack(musicTracks[currentTrackIndex.current]);
    const audio = audioRef.current;
    if (audio) {
      audio.src = musicTracks[currentTrackIndex.current].src;
      audio.play().catch(console.error);
    }
  }, []);

  // Toggle play/pause
  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        await audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
      // Save playback state
      localStorage.setItem('musicPlayback', JSON.stringify({
        isPlaying: !isPlaying,
        currentTime: audio.currentTime,
        trackIndex: currentTrackIndex.current,
        lastUpdated: Date.now(),
      }));
    } catch (error) {
      console.error('Playback error:', error);
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-24 right-6 bg-black/80 text-white px-4 py-2 rounded-lg text-sm z-50';
        notification.textContent = 'Click here to enable audio';
        document.body.appendChild(notification);
        setTimeout(() => {
          notification.classList.add('opacity-0', 'transition-opacity', 'duration-500');
          setTimeout(() => notification.remove(), 500);
        }, 3000);
      }
    }
  }, [isPlaying]);

  // Handle pointer display for user guidance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPlaying) {
        setShowPointer(true);
        const hideTimer = setTimeout(() => setShowPointer(false), 10000);
        return () => clearTimeout(hideTimer);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  // Initialize audio and set up event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Create audio element
    const audio = new Audio();
    audio.volume = 0.15;
    audio.loop = true;
    audioRef.current = audio;

    // Load saved playback state if available
    const savedPlayback = localStorage.getItem('musicPlayback');
    if (savedPlayback) {
      try {
        const { isPlaying: savedIsPlaying, currentTime, trackIndex, lastUpdated } = JSON.parse(savedPlayback);
        
        // Only restore if it was saved within the last 30 minutes
        if (Date.now() - lastUpdated < 30 * 60 * 1000) {
          currentTrackIndex.current = trackIndex % musicTracks.length;
          setCurrentTrack(musicTracks[currentTrackIndex.current]);
          audio.src = musicTracks[currentTrackIndex.current].src;
          
          if (savedIsPlaying) {
            audio.currentTime = currentTime || 0;
            audio.play().catch(console.error);
            setIsPlaying(true);
          }
        }
      } catch (error) {
        console.error('Error parsing saved playback state:', error);
      }
    } else {
      // Initialize with first track if no saved state
      audio.src = musicTracks[currentTrackIndex.current].src;
    }

    // Set up event listeners
    audio.addEventListener('ended', handleTrackEnd);

    // Cleanup function
    return () => {
      audio.removeEventListener('ended', handleTrackEnd);
      audio.pause();
      audioRef.current = null;
    };
  }, [handleTrackEnd]);

  // Save playback state before unload
  useEffect(() => {
    const savePlayback = () => {
      const audio = audioRef.current;
      if (!audio) return;
      
      localStorage.setItem('musicPlayback', JSON.stringify({
        isPlaying,
        currentTime: audio.currentTime,
        trackIndex: currentTrackIndex.current,
        lastUpdated: Date.now(),
      }));
    };

    window.addEventListener('beforeunload', savePlayback);
    return () => {
      window.removeEventListener('beforeunload', savePlayback);
    };
  }, [isPlaying]);

  // Inject animation style
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {showPointer && (
            <motion.div
              className="absolute -top-24 -right-2 z-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -top-6 -right-2"
                  animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                  <Hand className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.div
                  className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 300 }}
                >
                  Play Bubble!
                  <div className="absolute -bottom-2 right-3 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 transform rotate-45" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setShowPointer(false);
            togglePlay();
          }}
          onHoverStart={() => {
            setIsHovered(true);
            setShowPointer(false);
          }}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center 
            bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg 
            ${isPlaying ? 'ring-2 ring-white ring-opacity-50' : ''}`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          <Image
            src="/bubble.png"
            alt="Music"
            width={24}
            height={24}
            className={`absolute inset-0 m-auto transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
          />
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying || isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {isPlaying ? <Volume2 size={24} className="text-white" /> : <VolumeX size={24} className="text-white" />}
          </div>
          {isPlaying && <div className="absolute inset-0 rounded-full bg-pink-400 animate-ping opacity-20" />}
        </motion.button>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute right-16 top-1/2 transform -translate-y-1/2 
                bg-gray-900/90 backdrop-blur-sm text-white text-sm p-3 rounded-lg w-60"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-lg">
                  <Music size={16} className="text-white" />
                </div>
                <div>
                  <p className="font-medium">{currentTrack.title}</p>
                  <p className="text-xs text-gray-300">{currentTrack.artist}</p>
                </div>
              </div>
              <p className="text-xs text-gray-300">{currentTrack.description}</p>
              <div className="text-xs text-pink-400 mt-2">
                {isPlaying ? 'Now playing' : 'Paused'} • Changes daily
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingMusicPlayer;
