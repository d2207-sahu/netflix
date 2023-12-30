import {useDispatch, useSelector} from 'react-redux';
import {baseFetchAPI} from '../service/api.service';
import {MOVIE_DATA_VIDEO, TRAILER} from '../config/constants';
import {useEffect} from 'react';
import {addHomeTeaserVideoID} from '../redux/slices/movieSlice';

const useMovieData = ({movieID, getVideo}) => {
  const dispatch = useDispatch();

  const homeTeaserVideoData = useSelector(
    (store) => store.movies?.homeTeaserVideoData,
  );

  const getMovieVideos = async () => {
    baseFetchAPI(
      'GET',
      MOVIE_DATA_VIDEO.replace('{movie_id}', movieID),
      null,
      async (data) => {
        const videos = data?.results;
        const initialLoadVideo =
          videos.find((video) => video.type === TRAILER) ?? videos[0];
        dispatch(addHomeTeaserVideoID(initialLoadVideo));
      },
      (err) => console.error(err),
    );
  };

  useEffect(() => {
    if (getVideo && !homeTeaserVideoData) {
      getMovieVideos();
    }
  }, []);
};

export {useMovieData};
