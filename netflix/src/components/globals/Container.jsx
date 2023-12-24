import styled from "styled-components";

const Container = styled.div`
    position: ${(props) => props.position ?? ""};
    display: ${(props) => props.display ?? "block"};
    z-index: ${(props) => props.z_index};
    width: -webkit-fill-available;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
`;

export default Container;
