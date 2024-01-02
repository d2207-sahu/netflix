import styled from 'styled-components'

const Form = styled.form`
    position: ${(props) => props.$position ?? "absolute"};
    display: ${(props) => props.$display ?? "flex"};
    flex-direction: column;
    align-items: stretch;
    padding: 5% 5%;
    justify-content: flex-start;
    margin: 5% auto;
    height: fit-content;
    width: 30%;
    right: 0;
    top: 0;
    left: 0;
    gap: .4rem;
    border-radius: 0.4rem;
    background-color: rgb(0, 0, 0, 0.8);
    min-height: fit-content;
`;

export default Form