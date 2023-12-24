import styled from 'styled-components'

const Image = styled.img`
    object-fit: ${props => props.object_fit ?? "cover"};
    position: ${(props) => props.$position ?? ""};
    width: ${props => props.$width};
    height: ${props => props.$height};

`

export default Image