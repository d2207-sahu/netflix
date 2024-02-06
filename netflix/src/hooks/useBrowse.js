import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { basePublicFetchAPI } from '../service/api.service';
import { addBrowseData, toggleLoadingCarousel } from '../redux/slices/movieSlice';
import { useErrorBoundary } from 'react-error-boundary';

const useBrowse = () => {
  const dispatch = useDispatch();
  const { showBoundary } = useErrorBoundary();
  const getBrowseData = async () => {
    dispatch(toggleLoadingCarousel(true));
    await basePublicFetchAPI(
      'GET',
      '/browse',
      null,
      async (data) => {
        dispatch(addBrowseData(data.data));
      },
      showBoundary
    );
    dispatch(toggleLoadingCarousel(false));
  };

  useEffect(() => {
    getBrowseData();
  }, []);
};

export default useBrowse;
