import React from 'react';
import { useSelector } from 'react-redux';
import { useMovieData } from './../../hooks/useMovieData';

const VideoBackground = ({ movieID }) => {
  const trailerVideoData = useSelector((store) => store.movies?.homeTeaserVideoData);

  useMovieData({ movieID, isHome: true });

  const data = trailerVideoData;
  // const [iframeLoaded, setIframeLaoded] = useState(false);
  return (
    <>
      <iframe
        className="min-h-[100vh]  h-[100vh] -z-10 aspect-video min-w-screen overflow-clip w-screen  relative clip-top-part before:bg-[ rgba(255, 255, 255, 0.8)]"
        // loop=1 hd=1
        src={`https://www.youtube.com/embed/${data?.key}?autoplay=0&mute=1&showinfo=0&controls=0&rel=0&hd=0&ap=%2526fmt%3D18&fmt=18`}
        title={data?.name}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        onLoad={() => {
          // setIframeLaoded(true);
        }}
      />
      
    </>
  );
};

export default VideoBackground;
