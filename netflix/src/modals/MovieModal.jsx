import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateModalSelectedVideo } from '../redux/slices/appSlice';
import { FiSkipBack } from 'react-icons/fi';

// updateModalSelectedVideo
// TOOD Create a modal Component that can be reused everywhere.
const MovieModal = () => {
    const dialogRef = useRef();
    const youtubeRef = useRef();
    const dispatch = useDispatch();
    const closeModal = () => {
        if (dialogRef.current) {
            // dialogRef.current.close();
            dispatch(updateModalSelectedVideo(null));
            document.body.classList.remove('openModal')
        }
    }
    const videoID = useSelector(store => store.app.modalSelectedVideo);
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
    useEffect(() => {
        let timeout;
        if (dialogRef?.current) {
            dialogRef?.current.addEventListener("click", e => {
                const dialogDimensions = dialogRef?.current.getBoundingClientRect()
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    closeModal()
                }
            });
            if (videoID) {
                // dialogRef.current.showModal();
                // Later on save teh scroll posiiotn and translacte to thjat poistion when closing
                window.scrollTo(0, 0);
                document.body.classList.add('openModal')
                timeout = setTimeout(() => {
                    toggleFullscreen(youtubeRef.current)
                }, 100);
            }
        }
        return () => {
            if (timeout)
                clearTimeout(timeout)
        }
    }, [videoID]);
    if (!videoID) return <></>;
    return (
        <div ref={dialogRef} className='p-0 m-0 relative h-[100%] w-[100%] z-50' >
            <iframe
                ref={youtubeRef}
                className="h-[100vh] w-[100vw] clip-top-part before:bg-[ rgba(255, 255, 255, 0.8)]"
                src={`https://www.youtube.com/embed/${videoID}?&fs=1&autoplay=1&mute=0&showinfo=0&controls=1&rel=0&hd=1`}
                title={"Video"}
                allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                allowFullScreen
            ></iframe>
            <div className='flex flex-col absolute top-0 h-min justify-between items-stretch bg-black'>
                <FiSkipBack size={'6rem'} color='#fff' className='hover:scale-2 hover:bg-black rounded-[2rem] p-4' onClick={() => {
                    closeModal();
                }}></FiSkipBack>
            </div>
        </div>
    )
}

export default MovieModal