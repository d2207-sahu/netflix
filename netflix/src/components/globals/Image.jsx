import styled, { css } from 'styled-components'

const Image = styled.img`
    object-fit: ${props => props.object_fit ?? "cover"};
    position: ${(props) => props.$position ?? ""};
    width: ${props => props.$width};
    height: ${props => props.$height};
    border-radius: ${props => props.$borderRadius};
    border-top-right-radius: ${props => props.$borderTopRightRadius};
    border-top-left-radius: ${props => props.$borderTopLeftRadius};
    max-width: ${props => props.$maxWidth ?? 'auto'};
    position: ${props => props.$position ?? 'fixed'};
    min-height: ${props => props.$minHeight};
    min-width: ${props => props.$minWidth};
    @media only screen and (max-width: 767px) {
        /* Mobile styles */
        ${({ $mobileStyles }) => $mobileStyles && css`${$mobileStyles}`}
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        /* Tablet styles */
        ${({ $tabletStyles }) => $tabletStyles && css`${$tabletStyles}`}
    }
`

export default Image