import React from "react";
import GridContainer from "../GridContainer";
import { SubHeading } from "./Text";

const GridSectionContainer = ({ title, entities, element }) => {
    return <div className='w-[100%] my-8 mx-0'>
        <SubHeading>
            {title}
        </SubHeading>
        <GridContainer $margin={'1rem 0'} $rowGap={"1rem"} $element={element ?? '4'}>
            {entities}
        </GridContainer>
    </div>;
}
export default GridSectionContainer