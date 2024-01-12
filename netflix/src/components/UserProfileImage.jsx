import React, { useEffect, useRef, useState } from 'react'
import { userRed, userBlack, userBlue, userYellow, userGreen } from '../assets';
// import { ButtonW } from './globals';

const userImages = [
    userBlack,
    userBlue,
    userRed,
    userYellow,
    userGreen
];
const UserProfileImage = ({ onClick, className, alt, index }) => {
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