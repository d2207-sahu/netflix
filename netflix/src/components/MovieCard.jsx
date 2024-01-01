import React, { useState } from 'react'
import { IconButton, NormalText } from './globals';
import { TMDB_API_IMAGE_CDN_URL } from '../config/constants';
import styled from 'styled-components';
import { FiInfo, FiPlay, FiPlus } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateModalMovieSelectedID } from '../redux/slices/appSlice';
import GenreTags from './MovieCardComponents/GenreTags';
import RatingTag from './MovieCardComponents/RatingTag';
import useFirestoreDB from '../hooks/useFirestoreDB';

const MovieCard = styled.div`
    cursor: pointer;
    flex: 0 0 20%;
    min-width: 20%;
    min-height: fit-content;
    @media (width: 600px) {
        flex: 0 0 33.3%;
        min-width: 33.3%;
    }
    @media (max-width: 1024px) {
        flex: 0 0 25%;
        min-width: 25%;
    }
    background-color: #181818;
    aspect-ratio: 16/9;
    margin: .25rem;
    border-radius: 0.5rem;
    transition-duration: 1000ms;
    transition: ease-in;
    clip: rect(1px,1px,1px,1px)!important;

    &:hover{
        position: relative;
        z-index: 20;
        transition-duration: 1500ms;
        transition: ease-out;
        clip: rect(1px,1px,1px,1px)!important;
        transform-origin: center center;
        /* transform: translateX(-52px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px); */
        transform: translateX(0px) translateY(-104px) scaleX(1.1) scaleY(1.1) translateZ(0px);
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    }
`;



const MovieCardComponent = ({ movieDetail }) => {
    const dispatch = useDispatch()
    const { addToSaved } = useFirestoreDB();
    const [onMouseOver, setOnMouseOver] = useState(false);
    const imageWidth = 'w300';
    const onMouseLeave = (event) => {
        event.preventDefault();
        setOnMouseOver(false);
    }
    const onMouseOverFunction = (event) => {
        event.preventDefault();
        setOnMouseOver(true);
    }
    return (
        <MovieCard key={movieDetail.id} className={`bg-white ${onMouseOver ? 'z-30' : ''}`}
            onMouseOver={onMouseOverFunction}
            onMouseLeave={onMouseLeave}>
            <img
                alt={movieDetail.original_title}
                src={TMDB_API_IMAGE_CDN_URL + imageWidth + movieDetail.backdrop_path}
                className="min-w-[100%] shadow-lg shadow-black rounded-t-md"
            />
            {onMouseOver &&
                <div className='p-[1rem] bg-[#181818] shadow-lg shadow-black rounded-b-md cursor-pointer'>
                    <div className='flex justify-between items-center py-4'>
                        <div className=' flex gap-4'>
                            <IconButton className='rounded'>
                                <FiPlay fill='#ffff' className=' fill-white' />
                            </IconButton>
                            <IconButton onClick={() => { addToSaved(movieDetail) }}>
                                <FiPlus />
                            </IconButton>
                        </div>
                        <IconButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(updateModalMovieSelectedID(movieDetail.id));
                        }}>
                            <FiInfo />
                        </IconButton>
                    </div>
                    <div className='flex'>
                        <NormalText>
                            {movieDetail.original_title}
                        </NormalText>
                    </div>
                    <div className='flex flex-wrap justify-between items-center py-3'>
                        <GenreTags genreIDs={movieDetail?.genre_ids} />
                        <RatingTag vote_count={movieDetail?.vote_count} vote_average={movieDetail?.vote_average} />
                    </div>
                </div>
            }
        </MovieCard>
    )
}

export default MovieCardComponent