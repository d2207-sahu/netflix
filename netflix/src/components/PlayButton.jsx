import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { ButtonW, IconButton } from './globals';
import { FiPlay } from 'react-icons/fi';
import { updateModalSelectedVideo } from '../redux/slices/appSlice';
import { useDispatch } from 'react-redux';

const PlayButton = ({ onAfterClick, rounded, videoID }) => {
    const { languageData } = useLanguage();
    const dispatch = useDispatch();
    const onPlayClick = () => {
        if (videoID)
            dispatch(updateModalSelectedVideo(videoID));

        if (onAfterClick)
            onAfterClick()
    }
    return rounded ?
        <IconButton className='rounded'>
            <FiPlay fill='#ffff' className=' fill-white' />
        </IconButton>
        :
        <ButtonW onClick={onPlayClick} className="mr-4 flex items-center gap-2">
            <FiPlay size={'3.5rem'} fill="black" />
            {!languageData ? '' : languageData?.play}
        </ButtonW>
        ;
}

export default PlayButton