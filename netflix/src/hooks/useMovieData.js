import { useDispatch, useSelector } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import {
  BACKEND_API_URL_MOVIES_INFO,
  TRAILER,
  MOVIE_DATA
} from '../config/constants';
import { useEffect, useState } from 'react';
import {
  addHomeTeaserVideoID,
  updateMovieModalInfo,
  updateModalMovieVideos
} from '../redux/slices/movieSlice';

// TODO use useMovieVideos
const useMovieData = ({ movieID, isHome = false }) => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const { modalMovieInfo } = useSelector((store) => store.movies);

  const homeTeaserVideoData = useSelector((store) => store.movies?.homeTeaserVideoData);

  const getMovieVideos = async () => {
    return await basePublicFetchAPI(
      'GET',
      `${MOVIE_DATA}${movieID}`,
      null,
      async (data) => {
        if (isHome) {
          const initialLoadVideo =
            data?.results.find((video) => video.type === TRAILER) ?? data?.results[0];
          dispatch(addHomeTeaserVideoID(initialLoadVideo));
          setPending(false);
          return;
        }
        dispatch(updateModalMovieVideos(data ? data?.results : []));
      },
      (err) => console.error(err)
    );
  };

  const getMovieData = async () => {
    return await basePublicFetchAPI(
      'GET',
      BACKEND_API_URL_MOVIES_INFO + `?movieID=${movieID}`,
      null,
      async (data) => dispatch(updateMovieModalInfo(data?.data)),
      (err) => console.error(err)
    );
  };

  const getFullMovieData = async () => {
    await getMovieData();
    setPending(false);
  };

  useEffect(() => {
    if (movieID) {
      setPending(true);
      if (isHome && !homeTeaserVideoData) {
        getMovieVideos();
        return;
      }
      getFullMovieData();
    }
  }, [movieID]);

  return { pending, modalMovieInfo };
};

export { useMovieData };
