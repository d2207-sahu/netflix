import React, { useEffect, useMemo } from 'react'
import { useMovieData } from '../../hooks/useMovieData'
import { useDispatch, useSelector } from 'react-redux'
import { closeGlobalModal, openGlobalModal, updateModalMovieSelectedID } from '../../redux/slices/appSlice'
import { TRAILER } from '../../config/constants'
import ShimmerLoading from '../../components/Shimmer/ShimmerLoading';
import Modal from '../Modal';
import MoreLikeThisSection from './MoreLikeThisSection'
import TrailersAndMoreSection from './TrailersAndMoreSection'
import AboutMovieSection from './AboutMovieSection'
import VideoModalSection from './VideoModalSection'
import useFirebaseMovieList from '../../hooks/useFirebaseMovieList'
import InformationSection from './InformationSection'

// when this modal opens, means have to update the url, and also let it read the url also
const MovieInfoModal = () => {
    const movideDetail = useSelector(store => store.app.modalMovieSelectedID);
    const { saveMovieToList: addRecentlyPlayed } = useFirebaseMovieList({ keyword: "played" });
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(updateModalMovieSelectedID(null));
        dispatch(closeGlobalModal());
    }
    useEffect(() => {
        if ((movideDetail?.id))
            dispatch(openGlobalModal())
    }, [(movideDetail)]);

    // Sometimes the API fails, have to call it again... Give the retry button to the user.
    const { modalMovieInfo, pending } =
        useMovieData({ movieID: (movideDetail?.id), isHome: false });

    const findTrailerVideo = useMemo(() => {
        const initialLoadVideo =
            modalMovieInfo?.videos.find((video) => (video.type === TRAILER));
        return initialLoadVideo;
    }, [modalMovieInfo?.videos]);
    if (!(movideDetail?.id)) return <></>;
    const video = findTrailerVideo ?? modalMovieInfo?.videos[0];
    return (
        <Modal className={`min-w-[100%] sm:min-w-[70%] min-h-[100%] shadow-md ${pending ? 'justify-center ' : ''} sm:max-h-[100%] sm:max-w-[100%] flex flex-col justify-start  m-0 sm:m-auto outline-none bg-[#181818] rounded-2xl w-[100vw] sm:w-[70%] w-100%`} key={"MovieInfoModal"}>
            {
                pending ?
                    <ShimmerLoading /> :
                    <>
                        <VideoModalSection
                            videos={modalMovieInfo?.videos}
                            addRecentlyPlayed={addRecentlyPlayed}
                            info={modalMovieInfo?.movies}
                            videoID={video?.key}
                            closeModal={closeModal}
                            movieDetail={movideDetail} />
                        <div className='flex flex-col px-5 py-4 sm:px-16'>
                            {modalMovieInfo?.movies &&
                                <InformationSection info={modalMovieInfo?.movies} />}
                            {modalMovieInfo?.similar &&
                                <MoreLikeThisSection similars={modalMovieInfo?.similar} />}
                            {modalMovieInfo?.videos.length > 0 &&
                                <TrailersAndMoreSection videos={modalMovieInfo?.videos ?? []} />}
                            {(modalMovieInfo?.credits) &&
                                <AboutMovieSection
                                    title={modalMovieInfo?.movies ? modalMovieInfo?.movies.title : ""}
                                    credits={modalMovieInfo?.credits} />}
                            {/* TODO later on can have the collection thing */}
                        </div>
                    </>
            }
        </Modal>
    )
}

export default MovieInfoModal