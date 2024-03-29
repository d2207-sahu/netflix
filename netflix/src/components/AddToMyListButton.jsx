import React, { useEffect, useMemo, useState } from 'react'
import { ButtonG, ButtonW, IconButton } from './globals';
import { FiCheckCircle, FiLoader, FiPlus } from 'react-icons/fi';
import { Theme } from '../styles/theme';
import { useLanguage } from '../context/LanguageContext';
import useFirebaseMovieList from '../hooks/useFirebaseMovieList';

const AddToMyListButton = ({ movieDetail, rounded }) => {
    const { saveMovieToList, pending, user } = useFirebaseMovieList({ keyword: 'saved' });
    const { languageData } = useLanguage();
    const [successState, setSuccessState] = useState(false);
    const handleAddButtonClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!successState) saveMovieToList({ videoData: movieDetail });
        e.stopPropagation();

    }
    const savedListMemoizedValue = useMemo(() => user?.saved.filter((savedData) => savedData.videoData?.id === movieDetail?.id), [user?.saved])
    useEffect(() => {
        const hasValue = savedListMemoizedValue;
        if (hasValue?.length > 0)
            setSuccessState(true);
    }, [user?.saved]);

    return (!rounded ? <>
        {pending ?
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
        pending ?
            <ButtonW className="flex items-center justify-center gap-2 mr-4">
                <FiLoader size={'3.5rem'} className='animate-spin' fill="black" />
            </ButtonW> :
            <ButtonG onClick={handleAddButtonClick} className="flex items-center justify-center gap-2 mr-4">
                {successState ?
                    <FiCheckCircle size={'3.5rem'} />
                    : <FiPlus size={'3.5rem'} fill='#ffff' className=' fill-white' />
                }
                {!languageData ? '' : languageData?.mylist}
            </ButtonG>
    );
}

export default AddToMyListButton