import UserProfileImage from "../UserProfileImage"
import React from "react"
import { NormalText } from "../globals"
import ProfileContainer from "./ProfileContainer"
import { Theme } from "../../styles/theme"

const UserCard = ({ user, index, onClick }) => {
    return <div className='aspect-square flex flex-col items-center  mt-10'>
        <ProfileContainer onClick={onClick}>
            <UserProfileImage className='rounded-[8px]' alt={"user: " + user.name} index={index} />
        </ProfileContainer>
        <NormalText className='mt-4' $color={Theme.text.BGBlack.Grey}>{user.name}</NormalText>
    </div>
}
export default UserCard