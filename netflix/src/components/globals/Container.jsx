import styled from "styled-components";

const Container = styled.div`
    position: ${(props) => props.$position ?? ""};
    display: ${(props) => props.$display ?? "flex"};
    z-index: ${(props) => props.$z_index};
    justify-content: ${(props) => props.$justifyContent};
    align-items: center;
    align-content: center;
    width: -webkit-fill-available;
    top: ${(props) => props.$top};
    background-color: black;
    /* background: linear - gradient(to bottom, rgba(0, 0, 0, 0.7), transparent); */
`;

export default Container;
