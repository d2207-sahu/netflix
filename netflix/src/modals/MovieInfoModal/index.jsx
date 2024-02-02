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
    const { info,
        videos,
        credits,
        similars, pending } =
        useMovieData({ movieID: (movideDetail?.id), isHome: false })
    const findTrailerVideo = useMemo(() => {
        const initialLoadVideo =
            videos.find((video) => (video.type === TRAILER));
        return initialLoadVideo;
    }, [videos]);
    if (!(movideDetail?.id)) return <></>;
    const video = findTrailerVideo ?? videos[0];
    return (
        <Modal className={`shadow-md ${pending ? 'justify-center ' : ''} sm:max-h-[100%] sm:max-w-[100%] flex flex-col justify-start  m-0 sm:m-auto outline-none bg-[#181818] rounded-2xl w-[100vw] sm:w-[70%] min-w-[60%]`} key={"MovieInfoModal"}>
            {!(movideDetail?.id) ?
                <></> :
                pending ?
                    <ShimmerLoading /> :
                    <>
                        <VideoModalSection
                            videos={videos}
                            addRecentlyPlayed={addRecentlyPlayed}
                            info={info}
                            videoID={video?.key}
                            closeModal={closeModal}
                            movieDetail={movideDetail} />
                        <div className='flex flex-col px-5 py-4 sm:px-16'>
                            {info && <InformationSection info={info} />}
                            {similars && <MoreLikeThisSection similars={similars} />}
                            {videos.length > 0 && <TrailersAndMoreSection videos={videos ?? []} />}
                            {(credits) && <AboutMovieSection title={info ? info.title : ""} credits={credits} />}
                            {/* TODO later on can have the collection thing */}
                        </div>
                    </>
            }
        </Modal>

    )
}





export default MovieInfoModal