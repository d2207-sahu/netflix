import styled from "styled-components";

export const SliderContainer = styled.div`
    min-width: 100%;
    justify-content: center;
    display: flex;
    overflow-x: clip; 
    overflow-y: visible !important;

    @media (max-width: 640px){
        overflow-x: scroll; 
    }
`;