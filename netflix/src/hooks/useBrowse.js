import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { addBrowseData, toggleLoadingCarousel } from '../redux/slices/movieSlice';

const useBrowse = () => {
  const dispatch = useDispatch();

  const getBrowseData = async () => {
    dispatch(toggleLoadingCarousel(true));
    await basePublicFetchAPI(
      'GET',
      '/browse',
      null,
      async (data) => {
        console.log(data)
        dispatch(addBrowseData(data.data));
      },
      (err) => console.error(err)
    );
    dispatch(toggleLoadingCarousel(false));
  };

  useEffect(() => {
    getBrowseData();
  }, []);
};

export default useBrowse;
