import {useDispatch, useSelector} from 'react-redux';
import {baseFetchAPI} from '../service/api.service';
import {
  MOVIE_DATA,
  MOVIE_DATA_CREDIT,
  MOVIE_DATA_RECOMMENDATION as MOVIE_DATA_SIMILAR,
  MOVIE_DATA_VIDEO,
  TRAILER,
} from '../config/constants';
import {useEffect, useState} from 'react';
import {
  addHomeTeaserVideoID,
  updateModalMovieCredits,
  updateModalMovieInfo,
  updateModalMovieSimilars,
  updateModalMovieVideos,
} from '../redux/slices/movieSlice';

const useMovieData = ({movieID, isHome = false}) => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const {info, videos, credits, similars} = useSelector(
    (store) => store.movies.movieModalData,
  );

  const homeTeaserVideoData = useSelector(
    (store) => store.movies?.homeTeaserVideoData,
  );

  const getMovieVideos = async () => {
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA_VIDEO.replace('{movie_id}', movieID),
      null,
      async (data) => {
        if (isHome) {
          const initialLoadVideo =
            data?.results.find((video) => video.type === TRAILER) ??
            data?.results[0];
          dispatch(addHomeTeaserVideoID(initialLoadVideo));
          setPending(false);
          return;
        }
        dispatch(updateModalMovieVideos(data ? data?.results : []));
      },
      (err) => console.error(err),
    );
  };

  const getMovieData = async () => {
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA.replace('{movie_id}', movieID),
      null,
      async (data) => dispatch(updateModalMovieInfo(data)),
      (err) => console.error(err),
    );
  };

  const getMovieCredits = async () => {
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA_CREDIT.replace('{movie_id}', movieID),
      null,
      async (data) => dispatch(updateModalMovieCredits(data ? data.cast : [])),
      (err) => console.error(err),
    );
  };

  const getMovieSimilars = async () => {
    return await baseFetchAPI(
      'GET',
      MOVIE_DATA_SIMILAR.replace('{movie_id}', movieID),
      null,
      async (data) =>
        dispatch(updateModalMovieSimilars(data ? data.results : [])),
      (err) => console.error(err),
    );
  };

  const getFullMovieData = async () => {
    await getMovieData();
    await getMovieVideos();
    await getMovieCredits();
    await getMovieSimilars();
    console.log("Executed ALL");
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

  return {pending, info, videos, credits, similars};
};

export {useMovieData};
