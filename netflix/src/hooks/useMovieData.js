import { useDispatch, useSelector } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { BACKEND_API_URL_MOVIES_INFO } from '../config/constants';
import { useEffect, useState } from 'react';
import { updateMovieModalInfo } from '../redux/slices/movieSlice';

/**
 * Gets Movies data
 * @param {movieID} string
 * @returns
 */
const useMovieData = ({ movieID }) => {
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const { modalMovieInfo } = useSelector((store) => store.movies);

  const getMovieData = async () => {
    return await basePublicFetchAPI(
      'GET',
      BACKEND_API_URL_MOVIES_INFO + `?movieID=${movieID}`,
      null,
      async (data) => {
        dispatch(updateMovieModalInfo(data?.data));
        return data?.data;
      },
      (err) => console.error(err)
    );
  };

  const awaitMovieData = async () => {
    setPending(true);
    await getMovieData();
    setPending(false);
  };

  useEffect(() => {
    if (movieID) awaitMovieData();
  }, [movieID]);

  // TODO later on return movieinfo too
  return { pending, modalMovieInfo };
};

export { useMovieData };
