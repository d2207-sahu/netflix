import styled from "styled-components";

const Heading = styled.h1`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    font-size:${props=>props.$fontSize ?? '3.6rem'};
    cursor:default;
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const NormalText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: white;
    font-size:${props=>props.$fontSize ?? '1.6rem'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const SmallText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size:${props=>props.$fontSize ?? '1.2rem'};
    color:${props=>props.$color ?? 'white'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;


const SubHeading = styled.h2`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size:${props=>props.$fontSize ?? '3.2rem'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const ErrorText = styled.h2`
    color: #e87c03;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size:${props=>props.$fontSize ?? '1.4rem'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

export { Heading, SubHeading, NormalText, ErrorText, SmallText }