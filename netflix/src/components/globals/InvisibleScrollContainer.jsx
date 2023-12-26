import styled from "styled-components";

const InvisibleScrollContainer = styled.div`
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`;

export { InvisibleScrollContainer }