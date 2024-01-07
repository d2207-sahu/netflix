import { baseFetchAPI } from '../service/api.service';
import { MOVIE_DATA_VIDEO } from '../config/constants';
import {  useState } from 'react';

// Called once at starting, means once executed
const useMovieVideos = ({ movieID }) => {
  const [videos, setVideos] = useState([]);
  const [pending, setPending] = useState(false);

  const getMovieVideos = async () => {
    setPending(true);
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA_VIDEO.replace('{movie_id}', movieID),
      null,
      async (data) => {
        setVideos(data?.results);
        console.log(data.results);
        setPending(false);
        return;
      },
      (err) => {
        setPending(false);
        return console.error(err);
      }
    );
  };

  return [getMovieVideos, videos, pending];
};

export default useMovieVideos;
