import React, { useMemo } from 'react'
import { useLanguage } from '../../context/LanguageContext';
import { NormalText } from '../../components/globals';
import GridSectionContainer from '../../components/globals/GridSectionContainer';

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

export default TrailersAndMoreSection