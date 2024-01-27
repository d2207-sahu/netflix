import React from 'react'
import PlayButton from '../../../components/PlayButton'
import { TMDB_API_IMAGE_CDN_URL } from '../../../config/constants'
import AddToMyListButton from '../../../components/AddToMyListButton'
import usePlay from '../../../hooks/usePlay'

const MovieMobileHomeContainer
    = ({ movieDetailData }) => {
        const { onPlayClick } = usePlay({
            movieData: movieDetailData,
            movieID: movieDetailData?.id
        });
        console.log("MOBILE")
        return (
            <div className='mt-[25%] mb-5 w-screen rounded-xl  min-h-[50%]  block sm:hidden'>
                <div className='flex flex-col justify-end gap-5 m-10 border-2 border-white border-solid rounded-xl '>
                    <img
                        onClick={onPlayClick}
                        loading="lazy"
                        alt={movieDetailData?.original_title}
                        src={TMDB_API_IMAGE_CDN_URL + 'w500' + movieDetailData?.poster_path}
                        className="w-[100%]  aspect-auto p-[0.5] object-cover shadow-black rounded-xl" />
                    <div className='absolute flex m-auto mb-[0.5] right-0 left-0 justify-center gap-5 p-10 items-center'>
                        <PlayButton
                            movieData={movieDetailData}
                            movieID={movieDetailData?.id} />
                        <AddToMyListButton
                            movieDetail={movieDetailData}
                            rounded={true} />
                    </div>
                </div>
            </div>
        )
    }

export default MovieMobileHomeContainer
