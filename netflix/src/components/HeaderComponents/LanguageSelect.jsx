import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageOption, LanguageSelectContainer } from "./LanguageSelectContainer";
import { changeLanguage } from "../../redux/slices/configSlice";
import { Languages } from "../../config/constants";
import { FiGlobe } from "react-icons/fi";

const LanguageSelect = () => {
    const config = useSelector(((store) => store.config))
    const dispatch = useDispatch();

    return <div className="items-center justify-center hidden sm:flex">
        <FiGlobe size={24}></FiGlobe>
        <LanguageSelectContainer
            className="hidden sm:block"
            value={(config.language)}
            aria-label="Language Select"
            onChange={(e) => {
                dispatch(changeLanguage(e.target.value));
            }}>
            {Object.keys(Languages).map(e =>
                <LanguageOption
                    key={e}
                    label={Languages[e]}
                    value={e}>{Languages[e]}</LanguageOption>
            )}
        </LanguageSelectContainer>
    </div>
}


export default LanguageSelect