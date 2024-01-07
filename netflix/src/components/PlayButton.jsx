import React, { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext';
import { ButtonG, ButtonW, IconButton } from './globals';
import { FiLoader, FiPlay } from 'react-icons/fi';
import { updateModalSelectedVideo } from '../redux/slices/appSlice';
import { useDispatch } from 'react-redux';
import useMovieVideos from '../hooks/useMovieVideos';
import { Theme } from '../styles/theme';
import useMoviesRecentlyPlayed from '../hooks/useMoviesRecentlyPlayed';

// If given the videoID then well and good,
// If not given take the movie ID and get the videos
// movieID is passed when we dont ahve the videoID
// movieData is passed all the time
const PlayButton = ({ onAfterClick, rounded, videoID, movieID, movieData }) => {
    const [getMovieVideos, videos, pending] = useMovieVideos({ movieID });
    const { saveMovieToRecentlyPlayed } = useMoviesRecentlyPlayed();
    const { languageData } = useLanguage();
    const dispatch = useDispatch();

    const onPlayClick = () => {
        if (movieID) {
            getMovieVideos();
        } else {
            if (videoID)
                dispatch(updateModalSelectedVideo(videoID));
            if (onAfterClick)
                onAfterClick()
        }
    }

    useEffect(() => {
        if (videos.length >= 1) {
            if (videos[0].key) {
                saveMovieToRecentlyPlayed(movieData)
                dispatch(updateModalSelectedVideo(videos[0].key));
            }
            if (onAfterClick)
                onAfterClick()
        }
    }, [videos]);

    return rounded ?
        pending ?
            <IconButton className='rounded'>
                <FiLoader fill={Theme.BG.Grey} className=' fill-white animate-spin' />
            </IconButton> :
            <IconButton className='rounded' onClick={onPlayClick}>
                <FiPlay fill='#ffff' className=' fill-white' />
            </IconButton>
        :
        pending ?
            <ButtonG className="mr-4 flex  items-center justify-center gap-2">
                <FiLoader size={'3.5rem'} className='animate-spin' fill="black" />
            </ButtonG> :
            <ButtonW onClick={onPlayClick} className="mr-4 flex items-center gap-2">
                <FiPlay size={'3.5rem'} fill="black" />
                {!languageData ? '' : languageData?.play}
            </ButtonW>
        ;
}

export default PlayButton