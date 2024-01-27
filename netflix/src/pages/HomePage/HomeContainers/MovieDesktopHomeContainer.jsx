
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDescription from '../../../components/MovieComponents/MovieDescription';
import MovieTitle from '../../../components/MovieComponents/MovieTitle';
import MovieInfoButton from '../../../components/MovieComponents/MovieInfoButton';
import PlayButton from '../../../components/PlayButton';
import ShimmerLoading from '../../../components/Shimmer/ShimmerLoading';
import { updateModalMovieSelectedID } from '../../../redux/slices/appSlice';
import VideoBackground from '../VideoBackground';

const MovieDesktopHomeContainer = ({ movies }) => {
    const dispatch = useDispatch();
    // Had to handle this case very efficiently
    const { homeTeaserVideoData, loadingCarousel } = useSelector((store) => store.movies);
    const { title, overview, id } = movies[0];
    return (
        <div className="hidden sm:block">
            {loadingCarousel ? (
                <ShimmerLoading />
            ) : (
                <>
                    <div className="flex flex-col justify-center items-start h-screen overflow-hidden top-0 bottom-0 absolute pl-[5%] bg-gradient-to-r from-black">
                        <MovieTitle title={title} className={'lg:w-[45vw] sm:w-[90vw]'} />
                        {/* Have this fade out later on  */}
                        <MovieDescription desc={overview} className={'lg:w-[30vw] sm:w-[60vw]'} />
                        <div className="flex mt-6">
                            {/* Had to add appropriated Buttons with images at the start */}
                            <PlayButton videoID={homeTeaserVideoData?.key} movieData={homeTeaserVideoData} />
                            <MovieInfoButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(updateModalMovieSelectedID(homeTeaserVideoData));
                                }}
                            />
                        </div>
                    </div>
                    <VideoBackground movieID={id} />
                </>
            )}
        </div>
    );
};

export default MovieDesktopHomeContainer;