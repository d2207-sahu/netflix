import styled from 'styled-components'

const Image = styled.img`
    object-fit: ${props => props.object_fit ?? "cover"};
    position: ${(props) => props.$position ?? ""};
    width: ${props => props.$width};
    height: ${props => props.$height};
    border-radius: ${props => props.$borderRadius};
    border-top-right-radius: ${props => props.$borderTopRightRadius};;
    border-top-left-radius: ${props => props.$borderTopLeftRadius};;
    max-width: auto;
`

export default Image