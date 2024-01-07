import { baseFetchAPI } from '../service/api.service';
import { useDispatch, useSelector } from 'react-redux';
import {
  addAllMovieGenres,
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  toggleLoadingCarousel
} from '../redux/slices/movieSlice';
import {
  ALL_GENRE,
  NOW_PLAYING_API_URL,
  POPULAR_API_URL,
  TOP_RATED_API_URL,
  UPCOMING_API_URL
} from '../config/constants';
import { useEffect } from 'react';

const useCarouselMoviesList = () => {
  const dispatch = useDispatch();

  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    addMovieGenres,
    loadingCarousel
  } = useSelector((store) => store.movies);

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
  const getPopularMovies = async () => {
    baseFetchAPI(
      'GET',
      POPULAR_API_URL + '?language=en-US&page=1',
      null,
      async (data) => {
        dispatch(addPopularMovies(data.results?.reverse()));
      },
      (err) => console.error(err)
    );
  };
  const getTopRatedMovies = async () => {
    baseFetchAPI(
      'GET',
      TOP_RATED_API_URL + '?language=en-US&page=1',
      null,
      async (data) => {
        dispatch(addTopRatedMovies(data.results));
      },
      (err) => console.error(err)
    );
  };
  const getUpcomingMovies = async () => {
    baseFetchAPI(
      'GET',
      UPCOMING_API_URL + '?language=en-US&page=1',
      null,
      async (data) => {
        dispatch(addUpcomingMovies(data.results));
      },
      (err) => console.error(err)
    );
  };

  const getAllGenres = async () => {
    baseFetchAPI(
      'GET',
      ALL_GENRE,
      null,
      async (data) => {
        dispatch(addAllMovieGenres(data.genres));
      },
      (err) => console.error(err)
    );
  };

  useEffect(() => {
    dispatch(toggleLoadingCarousel(true));
    Promise.allSettled([
      !addMovieGenres && getAllGenres(),
      !nowPlayingMovies && getNowPlayingMovies(),
      !popularMovies && getPopularMovies(),
      !topRatedMovies && getTopRatedMovies(),
      !upcomingMovies && getUpcomingMovies()
    ]).finally(() => {
      dispatch(toggleLoadingCarousel(false));
    });
  }, []);

  console.log(loadingCarousel);
  return { nowPlayingMovies, topRatedMovies };
};

export default useCarouselMoviesList;
