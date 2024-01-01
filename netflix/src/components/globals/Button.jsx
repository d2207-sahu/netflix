import styled from "styled-components";

const Button = styled.button`
    background-color: #e50914;
    border: 0;
    border-radius: 4px;
    padding: 16px;
    margin-top:20px;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
`;

const ButtonW = styled.button`
    background-color: white;
    border: 0;
    border-radius: .5rem;
    padding: 0.5rem  2rem;
    color: black;
    font-size: 1.6rem;
    font-weight: 500;
    &:hover{
        background-color: rgba(255, 255, 255, 0.75);
    }
`;

const ButtonG = styled.button`
    background-color: #4e4e4e;
    border: 0;
    border-radius: .5rem;
    padding: .5rem  2rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 500;
    &:hover{
       background-color: rgba(109, 109, 110, 0.4);
    }
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
    font-size: 1.8rem;
    &:hover{
        background-color: #323232;

    }
`;


// TODO add hover later on
export { Button, ButtonW, ButtonG, IconButton }