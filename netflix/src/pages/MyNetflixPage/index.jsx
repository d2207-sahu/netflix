import React from 'react'
import Header from '../../components/layouts/Header'
import BottomNavBar from '../../components/layouts/BottomNavBar'
import { useSelector } from 'react-redux';
import UserCard from '../../components/AddProfilePageComponents/UserCard';
import useFirestoreDB from '../../hooks/useFirestoreDB';
import { NormalText } from '../../components/globals';
import { useLanguage } from '../../context/LanguageContext';
import UserProfileImage from '../../components/UserProfileImage';
import FirebaseMovieCarousel from '../HomePage/FireabaseMovieCarousel';

const MyNetflixPage = () => {
    const user = useSelector(store => store.user);
    const { languageData } = useLanguage();
    const { selectNameAndNavigate } = useFirestoreDB();
    const { browse } = useSelector(state => state.movies);

    return (
        <div className='h-screen'>
            <Header />
            <div className='pt-[30%] justify-center items-center flex flex-col'>
                <UserProfileImage name={user?.name} className='h-max-[200px] h-[10rem]' />
                <NormalText className='pt-9'>{languageData?.accounts}</NormalText>
                <div className='flex flex-wrap justify-center gap-8'>
                    {user && user?.users && user?.users.map((element, indexT) =>
                    (<UserCard
                        key={element.name}
                        onClick={() => { selectNameAndNavigate(element.name) }}
                        index={indexT}
                        user={element} />))}
                </div>
            </div>
            {browse ? browse.carousel.map((carouselData) => {
                if (carouselData.keyword && carouselData.firebase_data) {
                    if (carouselData.keyword === 'searched') return <div key={carouselData.title}></div>
                    return <FirebaseMovieCarousel
                        key={carouselData.keyword}
                        keyword={carouselData.keyword}
                        title={carouselData.title} />
                }

            }) : <></>}
            <div className='h-[30vh]'></div>
            <BottomNavBar />
        </div>
    )
}

export default MyNetflixPage