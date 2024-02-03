import { MOVIE_DATA } from '../config/constants';
import { basePublicFetchAPI } from '../service/api.service';
import {  useState } from 'react';

// Called once at starting, means once executed
const useMovieVideos = ({ movieID }) => {
  const [videos, setVideos] = useState([]);
  const [pending, setPending] = useState(false);

  const getMovieVideos = async () => {
    setPending(true);
    return await basePublicFetchAPI(
      'GET',
      `${MOVIE_DATA}${movieID}`,
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
