import styled from "styled-components";

const Button = styled.button`
    background-color: #e50914;
    border: 0;
    border-radius: 4px;
    padding: 16px;
    margin-top:20px;
    color: white;
    font-size: 2rem;
`;

const ButtonW = styled.button`
    background-color: white;
    border: 0;
    border-radius: 4px;
    padding: 16px;
    color: black;
    font-size: 2rem;
`;

const ButtonG = styled.button`
    background-color: #4e4e4e;
    border: 0;
    border-radius: 4px;
    padding: 16px;
    color: white;
    font-size: 2rem;
`;

const IconButton = styled.button`
    background-color: #272727;
    border-color: white;
    border-width: 1.5px;
    outline: 1px;
    outline-color: white;
    border-radius: 4rem;
    padding:0.75rem;
    color: white;
    font-size: 2rem;
    &:hover{
    background-color: #323232;

    }
`;


// TODO add hover later on
export { Button, ButtonW, ButtonG, IconButton }