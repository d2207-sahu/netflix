import styled from "styled-components";

const Handle = styled.button`
    display: flex;
    flex-grow: 0;
    border: none;
    border-radius:0.5rem;
    width: 3%;
    background-color: #42424265;
    z-index: 10;
    margin: .25rem 0;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem;
    color: white;

    @media (max-width: 640px) {
        display: none;
    }
`;

export const LeftHandle = styled(Handle)`
    opacity: ${props => props.$dontShow ?? '1'};
    &:hover{
        background-color: rgba(22, 22, 22, 0.293);
        scale: 1.3;
    }
`

export const RightHandle = styled(Handle)`
    opacity: ${props => props.$dontShow ?? '1'};
    margin-right: ${props => props.$marginRight ?? '0'};
   &:hover{
        background-color: rgba(22, 22, 22, 0.293);
        scale: 1.3;
    }
`;