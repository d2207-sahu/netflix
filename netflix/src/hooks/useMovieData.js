import {useDispatch} from 'react-redux';
import {baseFetchAPI} from '../service/api.service';
import {MOVIE_DATA_VIDEO, TEASER} from '../config/constants';
import {useEffect} from 'react';
import {addHomeTeaserVideoID} from '../redux/slices/movieSlice';

const useMovieData = ({movieID, getVideo}) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    baseFetchAPI(
      'GET',
      MOVIE_DATA_VIDEO.replace('{movie_id}', movieID),
      null,
      async (data) => {
        const videos = data?.results;
        const initialLoadVideo =
          videos.find((video) => video.type === TEASER) ?? videos[0];
        dispatch(addHomeTeaserVideoID(initialLoadVideo));
      },
      (err) => console.error(err),
    );
  };

  useEffect(() => {
    if (getVideo) {
      getMovieVideos();
    }
  }, []);
};

export {useMovieData};
