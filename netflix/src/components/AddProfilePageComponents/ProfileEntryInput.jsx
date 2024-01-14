import styled from "styled-components";
import { Theme } from "../../styles/theme";

const ProfileEntryInput = styled.input`
    background: ${Theme.text.BGBlack.Grey};
    border: 1px solid transparent;
    box-sizing: border-box;
    color: ${Theme.text.BGWhite.White};
    font-size: 1.3vw;
    height: 2em;
    margin: 0 0.8em 0 0;
    padding: 0.2em 0.6em;
    text-indent: 0.1vw;
    width: 18rem;

    &:active{
        outline: none;
    }

    @media (max-width: 640px) {
        min-height: 40px;
        font-size: 1.6rem;
    }
`
export default ProfileEntryInput;