import React from 'react';
import {useSelector} from 'react-redux';
import {useMovieData} from './../../hooks/useMovieData';
const VideoBackground = ({movieID}) => {
  const trailerVideoData = useSelector(
    (store) => store.movies?.homeTeaserVideoData,
  );

  useMovieData({movieID, getVideo: true});

  const data = trailerVideoData;

  // TODO uncomment some tf the code to see what s happening
  // TODO remove the title and share button from the top
  // TODO dont let the youtubne sned the recommendations ath the end of the video.
  // TODO make the video run in loop.
  // Touch is not working here, as it is wrapped isnide the texts
  return (
    <>
      <iframe
        height={'20px'}
        className="w-screen h-screen"
        // loop=1 hd=1
        src={`https://www.youtube.com/embed/${data?.key}?autoplay=0&mute=1&showinfo=0&controls=0&rel=0&hd=0&ap=%2526fmt%3D18&fmt=18`}
        title={data?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoBackground;
