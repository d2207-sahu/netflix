import styled from "styled-components";

const Heading = styled.h1`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 600;
    font-size: 3.6rem;
    cursor:default;
`;

const NormalText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 600;
    font-size: 1.6rem;
`;


const SubHeading = styled.h2`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 600;
    font-size: 3.2rem;
`;

const ErrorText = styled.h2`
    color: #e87c03;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: 600;
    font-size: 1.4rem;
`;

export { Heading, SubHeading, NormalText, ErrorText }