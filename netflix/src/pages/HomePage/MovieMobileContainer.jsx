import React from 'react'
import PlayButton from '../../components/PlayButton'
import { TMDB_API_IMAGE_CDN_URL } from '../../config/constants'
import AddToMyListButton from '../../components/AddToMyListButton'
import usePlay from '../../hooks/usePlay'

const MovieMobileContainer
    = ({ movieDetailData }) => {
        const { onPlayClick } = usePlay({ movieData: movieDetailData, movieID: movieDetailData?.id });
        return (
            <div className='mt-[25%] mb-5 w-screen rounded-xl  h-[80%] min-h-[540px] block sm:hidden'>
                <div className='border-white border border-10 gap-5 rounded-xl m-10  flex flex-col justify-end '>
                    <img
                        alt={movieDetailData?.original_title}
                        src={TMDB_API_IMAGE_CDN_URL + 'w300' + movieDetailData?.poster_path}
                        className="w-[100%] shadow-lg h-[75vh] aspect-auto object-cover shadow-black rounded-t-md" />
                    <div
                        onClick={onPlayClick}
                        className='bg-gradient-to-t from-[#000000b5] h-[100%] w-[-webkit-fill-available] absolute'></div>
                    <div className='absolute flex m-auto right-0 left-0 justify-center gap-5 p-10 items-center'>
                        <PlayButton movieData={movieDetailData} movieID={movieDetailData?.id} />
                        <AddToMyListButton movieDetail={movieDetailData} rounded={true} />
                    </div>
                </div>
            </div>

        )
    }

export default MovieMobileContainer
