import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeGlobalModal, openGlobalModal, updateModalSelectedVideo } from '../redux/slices/appSlice';
import { FiSkipBack } from 'react-icons/fi';
import Modal from './Modal';

const MovieModal = () => {
    const youtubeRef = useRef();
    const dispatch = useDispatch();
    const videoID = useSelector(store => store.app.modalSelectedVideo);

    const openMovieModal = () => {
        dispatch(openGlobalModal());
    }
    const closeModal = () => {
        dispatch(updateModalSelectedVideo(null));
        document.body.classList.remove('openModal')
        dispatch(closeGlobalModal())
    }

    useEffect(() => {
        let timeout;
        if (videoID) {
            // Later on save the scroll position and translate to that position when closing
            window.scrollTo(0, 0);
            document.body.classList.add('openModal')
            openMovieModal()
            timeout = setTimeout(() => {
                toggleFullscreen(youtubeRef.current)
            }, 100);
        }
        return () => {
            if (timeout)
                clearTimeout(timeout)
        }
    }, [videoID]);

    if (!videoID) return <></>;

    return (
        <Modal key={"MovieModal"}>
            <div className='p-0 m-0 relative h-[100%] w-[100%] z-50' >
                <iframe
                    ref={youtubeRef}
                    className="h-[100vh] w-[100vw] clip-top-part before:bg-[ rgba(255, 255, 255, 0.8)]"
                    src={`https://www.youtube.com/embed/${videoID}?&fs=1&autoplay=1&mute=0&showinfo=0&controls=1&rel=0&hd=1`}
                    title={"Video"}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                    allowFullScreen
                ></iframe>
                <div className='absolute top-0 flex flex-col items-stretch justify-between bg-black h-min'>
                    <FiSkipBack size={'6rem'} color='#fff' className='hover:scale-2 hover:bg-black rounded-[2rem] p-4' onClick={() => {
                        closeModal();
                    }}></FiSkipBack>
                </div>
            </div>
        </Modal>

    )
}

function toggleFullscreen(player) {
    if (player.requestFullscreen) {
        player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
    } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
    }
}

export default MovieModal