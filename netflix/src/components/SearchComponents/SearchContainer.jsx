import styled from 'styled-components'

const SearchContainer = styled.div`
    border-color: white;
    cursor: pointer;
    border-radius: 0;
    background-color: ${props => !props.$selected ? 'black' : ''};
    border-width: ${props => props.$selected ? props.$selected : '1px'};
    padding: .4rem;
    padding-top: 2px;
    margin-right: ${props => props.$selected ? '4px' : '12px'};
    display: flex;
    flex-direction: row;
    gap: .8rem;
    align-items: center;
`

export default SearchContainer