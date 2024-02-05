import styled from 'styled-components'

const GridContainer = styled.div`
    margin: ${props => props.$margin ?? "0 4% 10px"} ;
    line-height: 1.6;
    display: grid;
    gap: 4vw 0px;
    position: relative;
    grid-template-columns: ${(props => ` repeat(${props.$desktopEl ?? 5}, 1fr)`)};
    row-gap: ${(props) => props.$rowGap ?? '4.5vw'};
    
    @media (max-width: 640px) {
        grid-template-columns: ${(props => ` repeat(${props.$mobileEl ?? 2}, 1fr)`)};
    }
`;

export default GridContainer