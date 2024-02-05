import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { addAllMovieGenres } from '../redux/slices/movieSlice';

const useBase = () => {
  const dispatch = useDispatch();

  const getBaseData = async () => {
    await basePublicFetchAPI(
      'GET',
      '/base?genre=1',
      null,
      async (data) => {
        dispatch(addAllMovieGenres(data?.data?.genre));
      },
      (err) => console.error(err)
    );
  };

  useEffect(() => {
    getBaseData();
  }, []);
};

export default useBase;