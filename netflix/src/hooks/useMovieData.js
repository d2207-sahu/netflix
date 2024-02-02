import { useDispatch, useSelector } from 'react-redux';
import { baseFetchAPI, basePublicFetchAPI } from '../service/api.service';
import {
  BACKEND_API_URL_MOVIES_INFO,
  // MOVIE_DATA,
  // MOVIE_DATA_CREDIT,
  // MOVIE_DATA_RECOMMENDATION as MOVIE_DATA_SIMILAR,
  MOVIE_DATA_VIDEO,
  TRAILER
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
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA_VIDEO.replace('{movie_id}', movieID),
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
