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
                <div className='border-white border-2 border-solid gap-5 rounded-xl m-10  flex flex-col justify-end '>
                    <img
                        onClick={onPlayClick}
                        alt={movieDetailData?.original_title}
                        src={TMDB_API_IMAGE_CDN_URL + 'w300' + movieDetailData?.poster_path}
                        className="w-[100%] h-[75vh] aspect-auto p-[0.5] object-cover shadow-black rounded-xl" />
                    <div className='absolute flex m-auto mb-[0.5] right-0 left-0 justify-center gap-5 p-10 items-center'>
                        <PlayButton movieData={movieDetailData} movieID={movieDetailData?.id} />
                        <AddToMyListButton movieDetail={movieDetailData} rounded={true} />
                    </div>
                </div>
            </div>

        )
    }

export default MovieMobileContainer
