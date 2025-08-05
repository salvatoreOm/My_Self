import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { MediaItem } from "@shared/schema";

interface MediaPlayerProps {
  item: MediaItem;
}

export function MediaPlayer({ item }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(50);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (item.type === "spotify") {
    return (
      <motion.div
        className="spotify-player rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300"
        whileHover={{ y: -5 }}
        data-testid="spotify-player"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Currently Listening</h3>
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.359.24-.66.54-.779 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.242 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>

        <div className="bg-black/20 rounded-xl p-4 mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={item.thumbnail}
              alt="Album cover"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm opacity-75">Running Playlist</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>2:14</span>
              <span>4:32</span>
            </div>
            <div className="bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex justify-center items-center space-x-6 mt-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={togglePlay}
              data-testid="spotify-play-button"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <p className="text-sm opacity-75 mb-2">{item.description}</p>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-sm underline hover:no-underline"
          data-testid="spotify-link"
        >
          Listen on Spotify <ExternalLink className="h-3 w-3" />
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="youtube-player rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300"
      whileHover={{ y: -5 }}
      data-testid="youtube-player"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">Recent Video</h3>
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>

      <div className="bg-black/20 rounded-xl p-4 mb-4 relative">
        <img
          src={item.thumbnail}
          alt="Video thumbnail"
          className="w-full h-48 object-cover rounded-lg"
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <Button 
            className="bg-red-600 hover:bg-red-700 rounded-full p-4"
            data-testid="youtube-play-button"
          >
            <Play className="h-6 w-6 text-white" />
          </Button>
        </motion.div>

        <div className="mt-4">
          <h4 className="font-semibold">{item.title}</h4>
          <p className="text-sm opacity-75 mt-1">Delivered at MIT's graduation ceremony</p>
        </div>
      </div>

      <p className="text-sm opacity-75 mb-2">{item.description}</p>
      <a 
        href="#" 
        className="inline-flex items-center gap-2 text-sm underline hover:no-underline"
        data-testid="youtube-link"
      >
        Watch on YouTube <ExternalLink className="h-3 w-3" />
      </a>
    </motion.div>
  );
}
