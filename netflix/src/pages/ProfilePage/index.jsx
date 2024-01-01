import React, { useRef, useState } from 'react'
import { Heading, NormalText, SmallText } from '../../components/globals'
import { translationConfig } from '../../config/translation-config'
import { useSelector } from 'react-redux'
import { FiUserPlus } from 'react-icons/fi';
import Header from '../../components/layouts/Header';
import useFirestoreDB from '../../hooks/useFirestoreDB';
import styled from 'styled-components';
import { validateName } from '../../utils/validation';
import UserProfileImage from '../../components/UserProfileImage';


const ProfilePage = () => {
    const users = useSelector(store => store.user.users);
    const [showAddProfile, setShowAddProfile] = useState(false);
    const { addProfile, selectNameAndNavigate } = useFirestoreDB();
    const userNameref = useRef();

    const addUserProfileName = () => {
        const name = userNameref.current.value
        if (validateName(name)) {
            addProfile(name)
        } else {
            // TODO error text later on   
        }
    }

    return (
        <>
            <Header />
            <div className='bg-black h-screen flex flex-col items-center justify-center'>
                {showAddProfile ? <div className='flex flex-col justify-start items-start gap-4'>
                    <Heading>{translationConfig.addProfile}</Heading>
                    <SmallText $color='#666666'>{translationConfig.addProfileDesc}</SmallText>
                    <AddNameContianer className='flex items-center gap-5'>
                        <UserProfileImage alt="Add users" className=' rounded-[4px] max-h-[180px] max-w-[180px] min-h-[80px] min-w-[80px] w-[8vw] h-[8vw]' index={users ? users.length : 0} />
                        <ProfileEntryInput ref={userNameref} />
                    </AddNameContianer>
                    <div className='flex gap-5'>
                        <PrefferedButton onClick={(e) => {
                            e.preventDefault();
                            addUserProfileName();
                        }}>{translationConfig.continue}</PrefferedButton>
                        <RectangleButton onClick={() => setShowAddProfile(prev => !prev)}> {translationConfig.cancel}</RectangleButton>
                    </div>
                </div> : (<><Heading>{translationConfig.whoWatching}</Heading>
                    <div className=' flex gap-8'>
                        {users && users.map((element, index) => <UserCard key={element.name} onClick={() => { selectNameAndNavigate(element.name) }} index={index} user={element} />)}
                        <div className='mt-10 flex flex-col items-center'>
                            <ProfileContainer onClick={() => setShowAddProfile(prev => !prev)} className='flex flex-col justify-center hover:bg-white'>
                                <FiUserPlus color='#666666' className='align-middle' size={'6rem'} />
                            </ProfileContainer>
                            <NormalText className='mt-4' $color='#666666'>{translationConfig.addProfile}</NormalText>
                        </div>
                    </div></>)
                }</div>
        </>
    )
}

const RectangleButton = styled.button`
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    display: block;
    font-size: 1.2vw;
    letter-spacing: 2px;
    padding: 0.5em 1.5em;

    &:hover{
        border: 1px solid #fff;
        color: #fff;
    }
`

const PrefferedButton = styled(RectangleButton)`
    background: #fff;
    border: 1px solid #fff;
    color: #000;
    font-weight: 500;

    &:hover{
        background: #c00;
        border: 1px solid #c00;
        color: #fff;
    }
`

const AddNameContianer = styled.div`
    border-bottom: 1px solid #333;
    border-top: 1px solid #333;
    padding: 2em 0;
`

const ProfileEntryInput = styled.input`
    background: #666;
    border: 1px solid transparent;
    box-sizing: border-box;
    color: #fff;
    font-size: 1.3vw;
    height: 2em;
    margin: 0 0.8em 0 0;
    padding: 0.2em 0.6em;
    text-indent: 0.1vw;
    width: 18em;

    &:active{
        outline: none;
    }
`

const ProfileContainer = styled.div`
    align-items: center;
    background-repeat: no-repeat;
    cursor: pointer;
    background-size: cover;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    height: 10vw;
    max-height: 200px;
    max-width: 200px;
    min-height: 84px;
    min-width: 84px;
    position: relative;
    text-decoration: none;
    width: 10vw;
    border-radius: 1.5rem;

    &:hover{
        background-color: #333;
        border: solid;
        border-color: white;
        border-width: .5rem;
    }
`

const UserCard = ({ user, index, onClick }) => {
    return <div className='aspect-square flex flex-col items-center  mt-10'>
        <ProfileContainer onClick={onClick}>
            <UserProfileImage className='rounded-[1.5rem]' alt={"user: " + user.name} index={index} />
        </ProfileContainer>
        <NormalText className='mt-4' $color='#666666'>{user.name}</NormalText>
    </div>
}

export default ProfilePage
