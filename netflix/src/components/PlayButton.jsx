import React from 'react'
import { useLanguage } from '../context/LanguageContext';
import { ButtonG, ButtonW, IconButton } from './globals';
import { FiLoader, FiPlay } from 'react-icons/fi';
import { Theme } from '../styles/theme';
import usePlay from '../hooks/usePlay';

const PlayButton = ({ onAfterClick, rounded, videoID, movieID, movieData }) => {
    const { onPlayClick, pending } = usePlay({ onAfterClick, videoID, movieID, movieData });
    const { languageData } = useLanguage();

    // TODO can optimise this
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
            <ButtonW onClick={onPlayClick} className="mr-4 flex justify-center items-center gap-2">
                <FiPlay size={'3.5rem'} fill="black" />
                {!languageData ? '' : languageData?.play}
            </ButtonW>
        ;
}

export default PlayButton