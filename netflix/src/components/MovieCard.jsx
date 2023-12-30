import React, { useState } from 'react'
import { IconButton, NormalText, SmallText } from './globals';
import { TMDB_API_IMAGE_CDN_URL } from '../config/constants';
import styled from 'styled-components';
import { FiInfo, FiPlay, FiPlus } from 'react-icons/fi';
import { useSelector } from 'react-redux';

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

const HDTag = styled.div`
    border: 1px solid hsla(0,0%,100%,.4);
    border-radius: 3px;
    color: hsla(0,0%,100%,.9);
    font-size: .7em;
    padding: 0 0.5em;
    white-space: nowrap;
    width: fit-content;
`
const formatReviewCount = (count) => {
    const formattedCount = count?.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    if (count >= 1000000) {
        return `${(count / 1000000).toLocaleString(undefined, { maximumFractionDigits: 2 })}M reviews`;
    } else if (count >= 100000) {
        return `${(count / 1000).toLocaleString(undefined, { maximumFractionDigits: 2 })}T reviews`;
    } else if (count >= 10000) {
        return `${(count / 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}H reviews`;
    }
    else {
        return `${formattedCount} reviews`;
    }
};

const MovieCardComponent = ({ movieDetail }) => {
    const [onMouseOver, setOnMouseOver] = useState(false);
    const { addMovieGenres } =
        useSelector((store) => store.movies);
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
                            <IconButton>
                                <FiPlus />
                            </IconButton>
                        </div>
                        <IconButton>
                            <FiInfo />
                        </IconButton>
                    </div>
                    <div className='flex'>
                        <NormalText>
                            {movieDetail.original_title}
                        </NormalText>
                    </div>


                    <div className='flex flex-wrap justify-between items-center py-3'>
                        <SmallText className='text-[#a2a2a2] '>
                            {movieDetail.genre_ids?.map((genreId) => {
                                const genre = addMovieGenres.find((genre) => genre.id === genreId);
                                return genre ? genre.name : 'Unknown Genre';
                            }).join(" • ")}
                        </SmallText>
                        {/* TODO Remove this section if number of revierws is 0 */}
                        <div className='flex gap-2'>
                            <HDTag >
                                <SmallText className='text-green-600 font-bold '>
                                    {`${movieDetail.vote_average?.toFixed(1)}`}
                                </SmallText>
                            </HDTag>
                            <SmallText className='text-[#6a6a6a] '>
                                {`${formatReviewCount(movieDetail.vote_count)}`}
                            </SmallText>
                        </div>
                    </div>
                </div>
            }
        </MovieCard>
    )
}

export default MovieCardComponent