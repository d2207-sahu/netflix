import {baseFetchAPI} from '../service/api.service';
import {useDispatch} from 'react-redux';
import {addNowPlayingMovies} from '../redux/slices/movieSlice';
import {NOW_PLAYING_API_URL} from '../config/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    baseFetchAPI(
      'GET',
      NOW_PLAYING_API_URL,
      null,
      async (data) => {
        dispatch(addNowPlayingMovies(data.results));
      },
      (err) => console.error(err),
    );
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;