import styled from 'styled-components'

const Image = styled.img`
    object-fit: ${props => props.object_fit ?? "none"};
    width: ${props => props.width ?? "none"};
`

export default Image