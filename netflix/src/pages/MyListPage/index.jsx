import React from 'react'
import useMoviesMyList from '../../hooks/useMoviesMyList'
import MovieCardComponent from '../../components/MovieCard';
import GridContainer from '../../components/GridContainer';
import { Heading } from '../../components/globals';
import Header from '../../components/layouts/Header';
import { useLanguage } from '../../context/LanguageContext';
import ShimmerCarouselGrid from '../../components/Shimmer/ShimmerCarouselGrid';

const MyListPage = () => {
    const {user, pending} = useMoviesMyList();
    const { languageData } = useLanguage()
console.log(user.saved)
    return (
        <>
            <Header />
            <div className='mt-[5%] pt-10 px-10'>
                <Heading className='mb-10'>{languageData?.mylist}</Heading>
                {pending ?
                    <ShimmerCarouselGrid />
                    : <GridContainer>
                        {user.saved.length === 0 ?
                            "Empty List"
                            : user.saved.map((videoData) =>
                                <MovieCardComponent
                                    key={videoData.timestamp}
                                    movieDetail={videoData.videoData} />)}
                    </GridContainer>}
            </div>
        </>
    )
}

export default MyListPage