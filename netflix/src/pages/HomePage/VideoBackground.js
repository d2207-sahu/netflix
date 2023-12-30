import React from 'react';
import {useSelector} from 'react-redux';
import {useMovieData} from './../../hooks/useMovieData';

const VideoBackground = ({movieID}) => {
  const trailerVideoData = useSelector(
    (store) => store.movies?.homeTeaserVideoData,
  );

  useMovieData({movieID, getVideo: true});

  const data = trailerVideoData;

  return (
      <iframe
        className="h-svh w-svw bg-black"
        // loop=1 hd=1
        src={`https://www.youtube.com/embed/${data?.key}?autoplay=0&mute=1&showinfo=0&controls=0&rel=0&hd=0&ap=%2526fmt%3D18&fmt=18`}
        title={data?.name}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        
      ></iframe>
  );
};

export default VideoBackground;
