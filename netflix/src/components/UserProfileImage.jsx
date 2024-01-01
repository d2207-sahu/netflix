import React from 'react'
import { userRed, userBlack, userBlue, userYellow, userGreen } from '../assets';

const userImages = [
    userBlack,
    userBlue,
    userRed,
    userYellow,
    userGreen
];
const UserProfileImage = ({ onClick, className, alt, index }) => {
    return (
        <img alt={alt} onClick={onClick} className={className} src={userImages[index ?? 0]} />
    )
}

export default UserProfileImage