import React, { useEffect, useMemo, useState } from 'react'
import useMoviesMyList from '../hooks/useMoviesMyList';
import { ButtonG, ButtonW, IconButton } from './globals';
import { FiCheckCircle, FiLoader, FiPlus } from 'react-icons/fi';
import { Theme } from '../styles/theme';
import { useLanguage } from '../context/LanguageContext';

const AddToMyListButton = ({ movieDetail, rounded }) => {
    const { saveMovieToMyList, savePending, user } = useMoviesMyList();
    const { languageData } = useLanguage();
    const [successState, setSuccessState] = useState(false);
    const handleAddButtonClick = () => {
        if (!successState) saveMovieToMyList({ videoData: movieDetail })
    }
    const savedListMemoizedValue = useMemo(() => user?.saved.filter((savedData) => savedData.videoData?.id === movieDetail?.id), [user?.saved])
    useEffect(() => {
        const hasValue = savedListMemoizedValue;
        if (hasValue.length > 0)
            setSuccessState(true);
    }, [user?.saved]);

    return (!rounded ? <>
        {savePending ?
            <IconButton className='rounded'>
                <FiLoader fill={Theme.BG.Grey} className=' fill-white animate-spin' />
            </IconButton> :
            <IconButton className='rounded' onClick={handleAddButtonClick}>
                {successState ?
                    <FiCheckCircle />
                    : <FiPlus fill='#ffff' className=' fill-white' />
                }
            </IconButton >}</>
        :
        savePending ?
            <ButtonW className="mr-4 flex  items-center justify-center gap-2">
                <FiLoader size={'3.5rem'} className='animate-spin' fill="black" />
            </ButtonW> :
            <ButtonG onClick={handleAddButtonClick} className="mr-4 flex items-center gap-2">
                {successState ?
                    <FiCheckCircle size={'3.5rem'} />
                    : <FiPlus size={'3.5rem'} fill='#ffff' className=' fill-white' />
                }
                {!languageData ? '' : languageData?.mylist}
            </ButtonG>
    );
}

export default AddToMyListButton