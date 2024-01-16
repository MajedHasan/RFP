// components/VideoPlayer.js
import Image from 'next/image';
import { useState } from 'react';

const VideoPlayer = ({ videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative">
      {!isPlaying && (
        <Image
          src={thumbnailUrl}
          alt="Video Thumbnail"
          className="cursor-pointer"
          onClick={handleThumbnailClick}
        />
      )}

      {isPlaying && (
        <video
          title="Video Player"
          width="560"
          height="315"
          controls
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
