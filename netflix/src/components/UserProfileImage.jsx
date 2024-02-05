import React, { useEffect, useMemo, useRef, useState } from 'react'
import { userRed, userBlack, userBlue, userYellow, userGreen } from '../assets';
import { useSelector } from 'react-redux';
import { Heading } from './globals';
// import { ButtonW } from './globals';

const userImages = [
    userBlack,
    userBlue,
    userRed,
    userYellow,
    userGreen
];

function setUserIndex(user) {
    let userIndex = 0;
    user && user.users && user.users.forEach((element, index) => {
        if (element.name === user.name) userIndex = index;
    })
    return userIndex;
}

const UserProfileImage = ({ onClick, className, alt, index, name }) => {
    const user = useSelector(((store) => store.user))
    let indexP = useMemo(() => setUserIndex(user), [user]);

    const [isHovered, setIsHovered] = useState(false);
    const dialogRef = useRef();
    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }
    useEffect(() => {
        if (dialogRef?.current) {
            dialogRef?.current.addEventListener("click", e => {
                const dialogDimensions = dialogRef?.current.getBoundingClientRect()
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    closeModal()
                }
            });
        }
    }, [(isHovered)]);

    return (
        <>
            <img
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt={alt}
                loading="lazy"
                onClick={onClick}
                className={className}
                src={userImages[index ?? indexP]} />
            {name ? <Heading>{user?.name}</Heading> : <></>}
            {/* <dialog ref={dialogRef} className='flex items-center justify-end bg-black shadow-md'>
                <div className='flex flex-col items-start'>
                    <ButtonW>Logout</ButtonW>
                    <ButtonW>User Profiles</ButtonW>
                    <ButtonW>Signout</ButtonW>
                </div>
            </dialog> */}
        </>
    )
}

export default UserProfileImage