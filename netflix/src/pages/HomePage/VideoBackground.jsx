import React from 'react';
import { useSelector } from 'react-redux';

const VideoBackground = () => {
  const { videoData } = useSelector(state => state.movies?.browse?.banner);
  if (!videoData) return <></>;
  return (
    <iframe
      className="min-h-[100vh]  h-[100vh] -z-10 aspect-video min-w-screen overflow-clip w-screen  relative clip-top-part before:bg-[ rgba(255, 255, 255, 0.8)]"
      src={`https://www.youtube.com/embed/${videoData?.key}?start=5&autoplay=1&&mute=1&showinfo=0&controls=0&rel=0&loop=1&hd=0&ap=%2526fmt%3D18&fmt=18`}
      title={videoData?.name}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    />
  );
};

export default VideoBackground;
