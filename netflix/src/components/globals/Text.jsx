import styled from "styled-components";
import { Theme } from "../../styles/theme";

const Heading = styled.h1`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size:${props => props.$fontSize ?? '3.2rem'};
    cursor:default;
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const NormalText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: white;
    font-size:${props => props.$fontSize ?? '1.6rem'};
    ${props =>
        props.$grey && `
        color: ${Theme.text.BGBlack.Grey};
        `}
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const SmallText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size:${props => props.$fontSize ?? '1.3rem'};
    color:${props => props.$color ?? Theme.text.BGBlack.White};
    ${props => props.$grey && `
        color:${Theme.text.BGBlack.Grey}`
    }
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const LinkHrefText = styled(SmallText)`
    color:${Theme.text.BGBlack.Blue};
`;



const SubHeading = styled.h2`
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size:${props => props.$fontSize ?? '2.8rem'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

const ErrorText = styled.h2`
    color: #e87c03;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size:${props => props.$fontSize ?? '1.4rem'};
    ${props =>
        props.$showShadow && `
        text-shadow: 0 1px 1px rgba(0,0,0,.7);`}
`;

export { Heading, SubHeading, NormalText, ErrorText, SmallText ,LinkHrefText}