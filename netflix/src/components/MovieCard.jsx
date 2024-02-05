import React, { useState } from 'react'
import { IconButton, NormalText } from './globals';
import { TMDB_API_IMAGE_CDN_URL } from '../config/constants';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateModalMovieSelectedID } from '../redux/slices/appSlice';
import GenreTags from './MovieComponents/GenreTags';
import RatingTag from './MovieComponents/RatingTag';
import PlayButton from './PlayButton';
import AddToMyListButton from './AddToMyListButton';

const MovieCard = styled.div`
    cursor: pointer;
    flex: 0 0 17%;
    min-width: 170px;
    min-height: fit-content;
    background-color: #181818;
    aspect-ratio: 16/9;
    margin: .25rem;
    border-radius: 0.5rem;
    transition-duration: 1000ms;
    transition: ease-in-out;
    clip: rect(1px,1px,1px,1px)!important;

    &:hover{
        position: relative;
        z-index: 20;
        transition-duration: 1500ms;
        transition: ease-in-out;
        clip: rect(1px,1px,1px,1px)!important;
        transform-origin: center center;
        transform: translateX(0px) translateY(-104px) scaleX(1.1) scaleY(1.1) translateZ(0px);
        opacity: 1;
        box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
    }

    @media (max-width: 640px) {
        flex: 0 0 33.3%;
        min-width: 33.3%;
        height: auto;
        aspect-ratio: inherit;
        &:hover{
            scale: 1;  
            z-index: 0;
            clip: rect(1px,1px,1px,1px)!important;
            transform: none;
            opacity: 1;
        }
        &:focus{
            scale: 1;
            z-index: 0;
            transform: none;

        }
    }
`;

const MovieCardComponent = ({ movieDetail }) => {
    const dispatch = useDispatch()
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
        <MovieCard
            key={movieDetail?.id}
            className={`bg-white ${onMouseOver ? 'z-30' : ''}`}
            onMouseOver={onMouseOverFunction}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(updateModalMovieSelectedID(movieDetail));
                e.stopPropagation();
            }}
            onMouseLeave={onMouseLeave}>
            <img
                loading='lazy'
                alt={movieDetail?.original_title}
                decoding="async"
                srcSet={`${TMDB_API_IMAGE_CDN_URL + 'w200' + movieDetail?.backdrop_path} 320w,
                ${TMDB_API_IMAGE_CDN_URL + 'w300' + movieDetail?.backdrop_path} 640w, 
                ${TMDB_API_IMAGE_CDN_URL + 'w300' + movieDetail?.backdrop_path} 800w `}
                src={TMDB_API_IMAGE_CDN_URL + imageWidth + movieDetail?.backdrop_path}
                className="min-w-[100%] shadow-lg shadow-black rounded-t-md hidden sm:block"
            />
            <img
                loading='lazy'
                decoding="async"
                alt={movieDetail?.original_title}
                srcSet={`${TMDB_API_IMAGE_CDN_URL + 'w200' + movieDetail?.poster_path} 320w,
                ${TMDB_API_IMAGE_CDN_URL + 'w400' + movieDetail?.poster_path} 640w, 
                ${TMDB_API_IMAGE_CDN_URL + 'w300' + movieDetail?.poster_path} 800w `}
                src={TMDB_API_IMAGE_CDN_URL + imageWidth + movieDetail?.poster_path}
                className="min-w-[100%] shadow-lg shadow-black rounded-t-md block sm:hidden"
            />
            {onMouseOver &&
                <div className='p-[1rem] bg-[#181818] shadow-lg shadow-black rounded-b-md cursor-pointer hidden sm:block'>
                    <div className='flex items-center justify-between py-4'>
                        <div className='flex gap-4 '>
                            <PlayButton rounded={true} movieID={movieDetail?.id} movieData={movieDetail} />
                            <AddToMyListButton movieDetail={movieDetail} />
                        </div>
                        <IconButton onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(updateModalMovieSelectedID(movieDetail));
                            e.stopPropagation();
                        }}>
                            <FiInfo />
                        </IconButton>
                    </div>
                    <div className='flex'>
                        <NormalText>
                            {movieDetail?.original_title}
                        </NormalText>
                    </div>
                    <div className='flex flex-wrap items-center justify-between py-3'>
                        <GenreTags genreIDs={movieDetail?.genre_ids} />
                        <RatingTag vote_count={movieDetail?.vote_count} vote_average={movieDetail?.vote_average} />
                    </div>
                </div>
            }
        </MovieCard>
    )
}

export default MovieCardComponent