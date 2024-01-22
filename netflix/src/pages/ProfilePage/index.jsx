import React, { useState } from 'react'
import { Heading, NormalText } from '../../components/globals'
import { useSelector } from 'react-redux'
import { FiUserPlus } from 'react-icons/fi';
import Header from '../../components/layouts/Header';
import useFirestoreDB from '../../hooks/useFirestoreDB';
import ProfileContainer from '../../components/AddProfilePageComponents/ProfileContainer';
import { Theme } from '../../styles/theme';
import AddProfilePage from './AddProfilePage';
import UserCard from '../../components/AddProfilePageComponents/UserCard';
import { useLanguage } from '../../context/LanguageContext';

const ProfilePage = () => {
    const { languageData } = useLanguage();
    const user = useSelector(store => store.user);
    const [showAddProfile, setShowAddProfile] = useState(false);
    const { selectNameAndNavigate } = useFirestoreDB();

    return (
        <>
            <Header />
            <div className='bg-black h-screen flex flex-col items-center justify-center'>
                {showAddProfile ?
                    <AddProfilePage setShowAddProfile={setShowAddProfile} /> :
                    (<>
                        <Heading>{!languageData ? '' : languageData?.whoWatching}</Heading>
                        <div className='flex gap-8 flex-wrap justify-center'>
                            {user && user?.users && user?.users.map((element, indexT) =>
                            (<UserCard
                                key={element.name}
                                onClick={() => { selectNameAndNavigate(element.name) }}
                                index={indexT}
                                user={element} />))}
                            <div className='mt-10 flex flex-col items-center'>
                                <ProfileContainer
                                    onClick={() =>
                                        setShowAddProfile(prev => !prev)}
                                    className='flex flex-col justify-center hover:bg-white'>
                                    <FiUserPlus
                                        color={Theme.text.BGBlack.Grey}
                                        className='align-middle'
                                        size={'6rem'} />
                                </ProfileContainer>
                                <NormalText
                                    className='mt-4'
                                    $color={Theme.text.BGBlack.Grey}>
                                    {!languageData ? '' : languageData?.addProfile}
                                </NormalText>
                            </div>
                        </div>
                    </>)
                }</div>
        </>
    )
}

export default ProfilePage