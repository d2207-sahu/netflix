import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { addBrowseData, toggleLoadingCarousel } from '../redux/slices/movieSlice';
import { browseJSON } from '../constants/browse';

const useBrowse = () => {
  const dispatch = useDispatch();

  const getBrowseData = async () => {
    dispatch(toggleLoadingCarousel(true));
    setTimeout(() => {
      dispatch(addBrowseData(browseJSON.data));
    }, 1000);
    await basePublicFetchAPI(
      'GET',
      '/browse',
      null,
      async (data) => {
        dispatch(addBrowseData(data));
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
