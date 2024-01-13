import React, { useState } from 'react'
import { IconButton, NormalText } from './globals';
import { TMDB_API_IMAGE_CDN_URL } from '../config/constants';
import styled from 'styled-components';
import { FiInfo } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { updateModalMovieSelectedID } from '../redux/slices/appSlice';
import GenreTags from './MovieCardComponents/GenreTags';
import RatingTag from './MovieCardComponents/RatingTag';
import PlayButton from './PlayButton';
import AddToMyListButton from './AddToMyListButton';
import usePlay from '../hooks/usePlay';

const MovieCard = styled.div`
    cursor: pointer;
    flex: 0 0 20%;
    min-width: 20%;
    min-height: fit-content;
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
    // This has to be replaced by useInfo thing.
    const { onPlayClick } = usePlay({ movieID: movieDetail?.id, movieData: movieDetail })
    return (
        <MovieCard
            key={movieDetail?.id}
            className={`bg-white ${onMouseOver ? 'z-30' : ''}`}
            onMouseOver={onMouseOverFunction}
            onClick={onPlayClick}
            onMouseLeave={onMouseLeave}>
            <img
                alt={movieDetail?.original_title}
                src={TMDB_API_IMAGE_CDN_URL + imageWidth + movieDetail?.backdrop_path}
                className="min-w-[100%] shadow-lg shadow-black rounded-t-md hidden sm:block"
            />
            <img
                alt={movieDetail?.original_title}
                src={TMDB_API_IMAGE_CDN_URL + imageWidth + movieDetail?.poster_path}
                className="min-w-[100%] shadow-lg shadow-black rounded-t-md block sm:hidden"
            />
            {onMouseOver &&
                <div className='p-[1rem] bg-[#181818] shadow-lg shadow-black rounded-b-md cursor-pointer hidden sm:block'>
                    <div className='flex justify-between items-center py-4'>
                        <div className=' flex gap-4'>
                            <PlayButton rounded={true} movieID={movieDetail?.id} movieData={movieDetail} />
                            <AddToMyListButton movieDetail={movieDetail} />
                        </div>
                        <IconButton onClick={(e) => {
                            e.preventDefault();
                            dispatch(updateModalMovieSelectedID(movieDetail));
                        }}>
                            <FiInfo />
                        </IconButton>
                    </div>
                    <div className='flex'>
                        <NormalText>
                            {movieDetail?.original_title}
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