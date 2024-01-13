import styled from "styled-components";

export const Slider = styled.div`
    display: flex;
    width: 94%;
    transform: translateX(${props => props.$sliderIndex});
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 500ms;
`;