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

const TinyText = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size:${props => props.$fontSize ?? '1rem'};
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

const FooterLinkText = styled(LinkHrefText)`
    color: #757575;
`

const ExploreMoreText = styled.div`
    cursor: pointer;
    display: inline-block;
    font-size: .9vw;
    line-height: .8vw;
    margin-right: 4px;
    max-width: 0;
    opacity: 0;
    transition: max-width 1s,opacity 1s,transform .75s;
    vertical-align: bottom;
    white-space: nowrap;
       color: #54b9c5;
`

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

export { Heading,FooterLinkText, SubHeading, NormalText, ErrorText, SmallText, LinkHrefText, ExploreMoreText, TinyText }