
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDescription from '../../../components/MovieComponents/MovieDescription';
import MovieTitle from '../../../components/MovieComponents/MovieTitle';
import MovieInfoButton from '../../../components/MovieComponents/MovieInfoButton';
import PlayButton from '../../../components/PlayButton';
import { updateModalMovieSelectedID } from '../../../redux/slices/appSlice';
import VideoBackground from '../VideoBackground';

const MovieDesktopHomeContainer = () => {
    const dispatch = useDispatch();
    const { movieData, videoData } = useSelector(state => state.movies?.browse?.banner);
    if (!movieData) return <></>
    const { title, overview } = movieData;

    return (
        <div className="hidden sm:block">
            <div className="flex flex-col justify-center items-start h-screen overflow-hidden top-0 bottom-0 absolute pl-[5%] bg-gradient-to-r from-black">
                <MovieTitle title={title} className={'lg:w-[45vw] sm:w-[90vw]'} />
                <MovieDescription desc={overview} className={'lg:w-[30vw] sm:w-[60vw]'} />
                <div className="flex mt-6">
                    <PlayButton videoID={videoData?.key} movieData={movieData} />
                    <MovieInfoButton
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(updateModalMovieSelectedID(movieData));
                        }}
                    />
                </div>
            </div>
            <VideoBackground />
        </div>
    );
};

export default MovieDesktopHomeContainer;