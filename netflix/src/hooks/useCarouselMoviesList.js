import { baseFetchAPI, basePublicFetchAPI } from '../service/api.service';
import { useDispatch, useSelector } from 'react-redux';
import {
  addHomeMoviesData,
  addNowPlayingMovies,
  toggleLoadingCarousel
} from '../redux/slices/movieSlice';
import { NOW_PLAYING_API_URL } from '../config/constants';
import { useEffect } from 'react';

const useCarouselMoviesList = () => {
  const dispatch = useDispatch();

  const { nowPlayingMovies, topRatedMovies, loadingCarousel } = useSelector(
    (store) => store.movies
  );

  const getHomeMoviesData = async () => {
    basePublicFetchAPI(
      'GET',
      'home',
      null,
      async (data) => {
        dispatch(addHomeMoviesData(data.results));
      },
      (err) => console.error(err)
    );
  };

  const getNowPlayingMovies = async () => {
    baseFetchAPI(
      'GET',
      NOW_PLAYING_API_URL + '?language=en-US&page=1',
      null,
      async (data) => {
        dispatch(addNowPlayingMovies(data.results));
      },
      (err) => console.error(err)
    );
  };

  useEffect(() => {
    dispatch(toggleLoadingCarousel(true));
    Promise.allSettled([getHomeMoviesData(), !nowPlayingMovies && getNowPlayingMovies()]).finally(
      () => {
        dispatch(toggleLoadingCarousel(false));
      }
    );
  }, []);

  return { nowPlayingMovies, topRatedMovies, loadingCarousel };
};

export default useCarouselMoviesList;
