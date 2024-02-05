import React from 'react'
import { TinyText } from '../globals/Text'
import { FiHome } from 'react-icons/fi';
import UserProfileImage from '../UserProfileImage';
import { useNavigate } from 'react-router-dom';
import { routingConfig } from '../../router/routing-config';

const BottomNavBar = () => {
    const navigate = useNavigate();
    return (
        <div className={`flex fixed bottom-0 z-20 pb-5 sm:hidden w-screen gap-5 justify-evenly items-center p-2 bg-[#101010]`}>
            <BottomNavIcon onClick={() => { navigate(routingConfig.home) }} title={"Home"} ><FiHome size={"3rem"} className='fill-white  m-[0.5rem] mx-auto'></FiHome></BottomNavIcon>
            <BottomNavIcon onClick={() => { navigate(routingConfig.mynetflix) }} title={"My Netflix"} ><UserProfileImage
                onClick={() => {
                    // later on simplify this to navigate to weird new page.
                }}
                className="m-[0.5rem] cursor-pointer h-[3rem] rounded-[.2rem]"
                alt='user' /></BottomNavIcon>
        </div>
    )
}

const BottomNavIcon = (props) => {
    return <div onClick={props.onClick} className='flex flex-col items-center justify-center'>
        {props.children}
        <TinyText className='m-auto text-center'>{props.title}</TinyText>
    </div>
}
export default BottomNavBar