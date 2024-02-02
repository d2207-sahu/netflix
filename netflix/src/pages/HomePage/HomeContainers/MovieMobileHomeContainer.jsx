import React from 'react'
import { useSelector } from 'react-redux'
import PlayButton from '../../../components/PlayButton'
import { TMDB_API_IMAGE_CDN_URL } from '../../../config/constants'
import AddToMyListButton from '../../../components/AddToMyListButton'
import usePlay from '../../../hooks/usePlay'

const MovieMobileHomeContainer = () => {
    const { movieData } = useSelector(state => state.movies?.browse?.banner);
    const { onPlayClick } = usePlay({
        movieData: movieData,
        movieID: movieData?.id
    });
    if (!movieData) return <></>
    return (
        <div className='mt-[25%] cursor-pointer mb-5 w-screen rounded-xl  min-h-[50%]  block sm:hidden'>
            <div className='flex flex-col justify-end gap-5 m-10 border-2 border-white border-solid rounded-xl '>
                <img
                    onClick={onPlayClick}
                    loading="lazy"
                    alt={movieData?.original_title}
                    src={TMDB_API_IMAGE_CDN_URL + 'w500' + movieData?.poster_path}
                    className="w-[100%]  aspect-auto p-[0.5] object-cover shadow-black rounded-xl" />
                <div className='absolute flex m-auto mb-[0.5] right-0 left-0 justify-center gap-5 p-10 items-center'>
                    <PlayButton
                        movieData={movieData}
                        movieID={movieData?.id} />
                    <AddToMyListButton
                        movieDetail={movieData}
                        rounded={true} />
                </div>
            </div>
        </div>
    )
}

export default MovieMobileHomeContainer
