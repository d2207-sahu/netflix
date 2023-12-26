import React from 'react';
import {useSelector} from 'react-redux';

const VideoBackground = ({movieID}) => {
  const trailerVideoData = useSelector(
    (store) => store.movies?.homeTeaserVideoData,
  );
  // useMovieData({movieID, getVideo:true});
  const data = {
    iso_639_1: 'en',
    iso_3166_1: 'US',
    name: "Olivia Rodrigo – 'Can’t Catch Me Now'",
    key: 'Jorxf7TuqAc',
    site: 'YouTube',
    size: 1080,
    type: 'Teaser',
    official: true,
    published_at: '2023-11-01T23:30:40.000Z',
    id: '6547f0c341a5613368844c3a',
  };
  //   const data = trailerVideoData;
  return (
    <>
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${data?.key}?autoplay=1&mute=1&controls=0`}
        title={data?.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        width="241" height="136"
        
      ></iframe>
    </>
  );
};

export default VideoBackground;
