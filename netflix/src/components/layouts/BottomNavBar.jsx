import React from 'react'
import { SmallText } from '../globals/Text'
import { FiHome } from 'react-icons/fi';
import UserProfileImage from '../UserProfileImage';

const BottomNavBar = () => {
    return (
        <div className='flex fixed bottom-0 z-20 sm:hidden w-screen gap-5 justify-evenly items-center p-2 bg-black'>
            <BottomNavIcon title={"Home"} ><FiHome size={"4rem"} className='fill-white  m-[1rem]'></FiHome></BottomNavIcon>
            <BottomNavIcon title={"My Netflix"} ><UserProfileImage
                onClick={() => { 
                    // later on simplify this to navigate to weird new page.
                 }}
                className="m-[1rem] cursor-pointer h-[4rem] rounded-[.5rem]"
                alt='user' /></BottomNavIcon>
        </div>
    )
}

const BottomNavIcon = (props) => {
    return <div className='flex-col flex justify-center items-start'>
        {props.children}
        <SmallText className='text-center m-auto'>{props.title}</SmallText>
    </div>
}
export default BottomNavBar