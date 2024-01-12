import React from 'react'
import PlayButton from '../../components/PlayButton'
import { TMDB_API_IMAGE_CDN_URL } from '../../config/constants'
import AddToMyListButton from '../../components/AddToMyListButton'

const MovieMobileContainer
    = ({ movieDetailData }) => {
        return (
            <div className='mt-[25%] mb-5 w-screen rounded-xl  h-[80%] min-h-[540px] block sm:hidden'>
                <div className='border-white border border-10 gap-5 rounded-xl m-10  flex flex-col justify-end '>
                    <img
                        alt={movieDetailData?.original_title}
                        src={"https://corsproxy.org/?https://image.tmdb.org/t/p/w300/6tEJnof1DKWPnl5lzkjf0FVv7oB.jpg" ?? TMDB_API_IMAGE_CDN_URL + '300' + movieDetailData?.poster_path}
                        className="w-[100%] shadow-lg h-[75vh] aspect-auto object-cover shadow-black rounded-t-md" />

                    <div className='bg-gradient-to-t from-[#000000b5] h-[100%] w-[-webkit-fill-available] absolute'></div>
                    <div className='absolute flex m-auto right-0 left-0 justify-center gap-5 p-10 items-center'>
                        <PlayButton movieData={movieDetailData} movieID={movieDetailData?.id} />
                        <AddToMyListButton movieDetail={movieDetailData} rounded={true} />
                    </div>
                </div>
            </div>

        )
    }

export default MovieMobileContainer
