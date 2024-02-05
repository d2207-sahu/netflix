import React from "react";
import GridContainer from "../GridContainer";
import { SubHeading } from "./Text";

const GridSectionContainer = ({ title, entities, mobileEl, desktopEl }) => {
    return <div className='w-[100%] my-8 mx-0'>
        <SubHeading>
            {title}
        </SubHeading>
        <GridContainer $mobileEl={mobileEl ?? 2} $desktopEl={desktopEl} $margin={'1rem 0'} $rowGap={"1rem"} >
            {entities}
        </GridContainer>
    </div>;
}
export default GridSectionContainer