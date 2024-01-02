import styled from "styled-components"

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

    &:hover{
        border-style: solid;
        border-color: white;
        border-width: 2px;
    }
`

export default ProfileContainer