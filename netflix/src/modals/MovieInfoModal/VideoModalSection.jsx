import React from 'react'
import AddToMyListButton from '../../components/AddToMyListButton';
import MovieTitle from '../../components/MovieComponents/MovieTitle';
import PlayButton from '../../components/PlayButton';
import ModalCloseButton from '../../components/ModalCloseButton';


const VideoModalSection = ({ videos, videoID, closeModal, info, addRecentlyPlayed, movieDetail }) => {

    return (<div className='sm:w-[100%] relative sm:aspect-video'>
        <iframe
            id={videoID}
            className=" sm:h-[80vh] aspect-video w-[100%] rounded-t-xl"
            // loop=1 hd=1
            src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&showinfo=0&controls=0&rel=0&hd=0&ap=%2526fmt%3D18&fmt=18`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        ></iframe>
        <div className=' hidden sm:flex flex-col w-[100%] absolute top-0 h-[100%] justify-between items-stretch bg-gradient-to-t from-[#181818]'>
            <div className='w-[100%] flex pt-8 px-8 justify-end items-end '> <ModalCloseButton onClick={() => closeModal()} /></div>
            <div className='w-[100%] flex p-32 gap-4 '>
                <PlayButton
                    onAfterClick={() => {
                        addRecentlyPlayed(info);
                        closeModal();
                    }}
                    videoID={
                        () => {
                            let videoID = videos.find((video) =>
                                video.type === "Behind the Scenes"
                            );
                            videoID = videoID ? videoID : videos.find((video) =>
                                video.type === "Featurette"
                            );
                            return videoID ? videoID.key : videos[0].key
                        }
                    }
                    movieData={movieDetail} />
                <AddToMyListButton movieDetail={movieDetail} />
            </div>
        </div>
        <div className=' flex sm:hidden flex-col w-[100%] top-0 h-[100%] justify-between items-stretch bg-gradient-to-t from-[#181818]'>
            {/* <div className='w-[100%] flex pt-8 px-8 justify-end items-end '> <ModalCloseButton onClick={() => closeModal()} /></div> */}
            <div className='w-[100%] flex flex-col p-5 gap-4 '>
                <MovieTitle title={info?.title} className={"block"} />
                <PlayButton
                    onAfterClick={() => {
                        addRecentlyPlayed(info);
                        closeModal();
                    }}
                    videoID={
                        () => {
                            let videoID = videos.find((video) =>
                                video.type === "Behind the Scenes"
                            );
                            videoID = videoID ? videoID : videos.find((video) =>
                                video.type === "Featurette"
                            );
                            return videoID ? videoID.key : videos[0].key
                        }
                    }
                    movieData={movieDetail} />
                <AddToMyListButton movieDetail={movieDetail} rounded={true} />
            </div>
        </div>
    </div>);
}
export default VideoModalSection