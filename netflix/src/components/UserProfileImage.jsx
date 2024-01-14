import React, { useEffect, useMemo, useRef, useState } from 'react'
import { userRed, userBlack, userBlue, userYellow, userGreen } from '../assets';
import { useSelector } from 'react-redux';
// import { ButtonW } from './globals';

const userImages = [
    userBlack,
    userBlue,
    userRed,
    userYellow,
    userGreen
];
const UserProfileImage = ({ onClick, className, alt }) => {
    const user = useSelector(((store) => store.user))
    let index = useMemo(() => setUserIndex(user), [user]);

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
    function setUserIndex(user) {
        let userIndex = 0;
        user && user.users && user.users.forEach((element, index) => {
            if (element.name === user.name) userIndex = index;
        })
        return userIndex;
    }

    return (
        <>
            <img
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                alt={alt}
                onClick={onClick}
                className={className}
                src={userImages[index ?? 0]} />
            {/* <dialog ref={dialogRef} className='flex justify-end items-center bg-black shadow-md'>
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