import styled from 'styled-components'

const Form = styled.form`
    position: ${(props) => props.$position ?? "absolute"};
    display: ${(props) => props.$display ?? "flex"};
    flex-direction: column;
    align-items: stretch;
    padding: 3% 3%;
    justify-content: center;
    margin: 5% auto;
    width: 30%;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    gap: 20px;
    background-color: rgb(0, 0, 0, 0.8);
    min-height: fit-content;
`;

export default Form