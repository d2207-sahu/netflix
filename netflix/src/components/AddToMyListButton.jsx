import React from 'react'
import useMoviesMyList from '../hooks/useMoviesMyList';
import { IconButton } from './globals';
import { FiLoader, FiPlus } from 'react-icons/fi';
import { Theme } from '../styles/theme';

const AddToMyListButton = ({ movieDetail }) => {
    const { saveMovieToMyList, savePending, } = useMoviesMyList();
    return (<>
        {savePending ?
            <IconButton className='rounded'>
                <FiLoader fill={Theme.BG.Grey} className=' fill-white animate-spin' />
            </IconButton> :
            <IconButton className='rounded' onClick={() => { saveMovieToMyList({ videoData: movieDetail }) }}>
                <FiPlus fill='#ffff' className=' fill-white' />
            </IconButton >}</>
    );
}

export default AddToMyListButton