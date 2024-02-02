import React, { useEffect, useMemo } from 'react'
import { IconButton, NormalText, SmallText, SubHeading } from '../components/globals'
import { RxCross2 } from "react-icons/rx";
import { useMovieData } from '../hooks/useMovieData'
import GridContainer from '../components/GridContainer'
import { useDispatch, useSelector } from 'react-redux'
import { closeGlobalModal, openGlobalModal, updateModalMovieSelectedID } from '../redux/slices/appSlice'
import { TMDB_API_IMAGE_CDN_URL, TRAILER } from '../config/constants'
import GenreTags from '../components/MovieComponents/GenreTags';
import RatingTag from '../components/MovieComponents/RatingTag';
import { useLanguage } from '../context/LanguageContext';
import PlayButton from '../components/PlayButton';
import ShimmerLoading from '../components/Shimmer/ShimmerLoading';
import AddToMyListButton from '../components/AddToMyListButton';
import MovieTitle from '../components/MovieComponents/MovieTitle';
import MovieDescription from '../components/MovieComponents/MovieDescription';
import Modal from './Modal';
import useFirebaseMovieList from '../hooks/useFirebaseMovieList';

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
                        <VideoModalSection videos={videos} addRecentlyPlayed={addRecentlyPlayed} info={info} videoID={video?.key} closeModal={closeModal} movieDetail={movideDetail} />
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

const ModalCloseButton = ({ onClick }) => <IconButton onClick={onClick}><RxCross2 size={'3.2rem'}></RxCross2></IconButton>
const ReleaseDate = ({ release_date }) => {
    // extract the year only
    return <div>{release_date}</div>
}
const AdultTag = ({ adult }) => {
    // false U/A
    // true A 18+
    // borderContainer
    return <SmallText>{adult}</SmallText>
}
const RuntimeTag = ({ runtime }) => { return <SmallText>{runtime}</SmallText> }
const LangaugeTag = ({ original_language }) => { return <SmallText>{original_language}</SmallText>; }
const CreditsSection = ({ category, entities }) => {
    return <span className='flex'>
        <SmallText $color='#636363'>{category + ": "}</SmallText>
        <div className='flex flex-wrap'>
            {entities.map((element) => {
                console.log(element);
                const text = element
                return <>
                    <SmallText key={element} className='hover:underline w-fit'>
                        {text}</SmallText>
                    <SmallText>{" , "}</SmallText>
                </>
            })}
        </div>
    </span>
}

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

const InformationSection = ({ info }) => {
    const { title, overview, tagline, original_language, adult, genre_ids, vote_count, vote_average, release_date, runtime } = info
    return <div className='flex justify-between w-[100%]'>
        <div className='flex flex-col items-start justify-start'>
            <div className='w-[68%] flex'>
                <ReleaseDate release_date={release_date} />
                <RuntimeTag runtime={runtime} />
                <RatingTag vote_average={vote_average} vote_count={vote_count} />
                <GenreTags genreIDs={genre_ids} />
                <AdultTag adult={adult} />
                <LangaugeTag original_language={original_language} />
            </div>
            <MovieTitle title={title} className={"hidden sm:block"} />
            <MovieDescription desc={tagline} className={"w-[60%] text-pretty italic"} />
            <SmallText className={"w-[50%]"} >{overview} </SmallText>
        </div>

    </div>;
}

const MoreLikeThisSection = ({ similars }) => {
    const { languageData } = useLanguage();
    const SimilarMovies = similars.map((movieData) => {
        const trimmedText = movieData.overview.length > 200 ? `${movieData.overview.slice(0, 200)}...` : movieData.overview;
        if (!movieData.poster_path || !movieData.overview) return;
        return <div key={movieData.id} className='aspect-square cursor-pointer h-max bg-[#2f2f2f] m-4 rounded-[0.5rem]'>
            <img className='rounded-t-[1rem] w-[100%]' loading="lazy" src={`${TMDB_API_IMAGE_CDN_URL + 'w200'}${movieData.poster_path}`} alt={`Video: ${movieData.title}`} />
            <div className='flex flex-col py-8 px-4 gap-4 h-[-webkit-fill-available] mb-4 overflow-clip'>
                <div className='flex items-stretch justify-between'>
                    <AdultTag />
                    <AddToMyListButton />
                </div>
                <SmallText $color='#d2d2d2'>{trimmedText}</SmallText>
            </div>
        </div>;
    })
    return <GridSectionContainer title={!languageData ? '' : languageData?.moreLikeThis} entities={SimilarMovies} />;

}

const TrailersAndMoreSection = ({ videos }) => {
    const { languageData } = useLanguage();

    const VideoCardsMemo = useMemo(() => {
        const VideoCardsData = {};
        // Seggregating the videos by Type
        videos.forEach(item => {
            const type = item.type;
            if (!VideoCardsData[type]) {
                VideoCardsData[type] = [item];
            } else {
                VideoCardsData[type].push(item);
            }
        });
        let VideoCards = [];
        Object.keys(VideoCardsData).forEach((videoType) => {
            const typeElements = VideoCardsData[videoType].map((videoData) => {
                const trimmedText = videoData.name.length > 30 ? `${videoData.name.slice(0, 30)}...` : videoData.name;
                if (videoType === "Clip")
                    return;
                return (
                    <div key={videoData.key} className='flex flex-col items-start justify-center p-2 cursor-pointer aspect-video'>
                        <img loading="lazy" className='rounded-t-[1rem]' src={`https://img.youtube.com/vi/${videoData.key}/mqdefault.jpg`} alt={`Video: ${videoData.name}`} />
                        <NormalText className='p-2'>{videoType + ": " + trimmedText} </NormalText>
                    </div>
                )
            });
            VideoCards = VideoCards.concat(typeElements);
        })
        return VideoCards
    }, [videos]);
    return <GridSectionContainer title={!languageData ? '' : languageData?.trailerAndMore} entities={VideoCardsMemo} />;
}

const GridSectionContainer = ({ title, entities, element }) => {
    return <div className='w-[100%] my-8 mx-0'>
        <SubHeading>
            {title}
        </SubHeading>
        <GridContainer $margin={'1rem 0'} $rowGap={"1rem"} $element={element ?? '4'}>
            {entities}
        </GridContainer>
    </div>;
}

const AboutMovieSection = ({ title, credits }) => {
    const { languageData } = useLanguage();

    // {
    //     "adult": false,
    //     "gender": 1 F, 2 M 
    //     "id": 568657,
    //     "known_for_department": "Acting",
    //     "name": "Sofia Boutella",
    //     "original_name": "Sofia Boutella",
    //     "popularity": 141.762,
    //     "profile_path": "/lGFhhjcjARQCM8AiGidyyyfDowh.jpg",
    //     "cast_id": 12,
    //     "character": "Kora",
    //     "credit_id": "61818dfd11386c002a9b6ed9",
    //     "order": 0
    // }

    const CerditsSectionMemo = useMemo(() => {
        const CreditsData = {};
        credits.forEach(item => {
            const type = item.known_for_department;
            if (!CreditsData[type]) {
                CreditsData[type] = [item];
            } else {
                CreditsData[type].push(item);
            }
        });
        let CeditSections = [];
        Object.keys(CreditsData).forEach((creditsType) => {
            let elements;
            if (creditsType === "Acting") {
                elements =
                    <CreditsSection
                        category={creditsType}
                        entities={CreditsData[creditsType].sort((a, b) => b.popularity - a.popularity).slice(0, 10).map((e) => e.name)} />
            }
            elements = <CreditsSection category={creditsType} entities={CreditsData[creditsType].map((e) => e.name)} />
            CeditSections = CeditSections.concat(elements);
        });
        return CeditSections
    }, [credits]);
    return <div className='flex flex-col w-[100%]'>
        <SubHeading>{!languageData ? '' : languageData?.about}{title}</SubHeading>
        {CerditsSectionMemo}
    </div>;
}
export default MovieInfoModal