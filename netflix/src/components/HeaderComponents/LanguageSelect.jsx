import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageOption, LanguageSelectContainer } from "./LanguageSelectContainer";
import { changeLanguage } from "../../redux/slices/appSlice";
import { Languages } from "../../config/constants";

const LanguageSelect = () => {
    const app = useSelector(((store) => store.app))
    const dispatch = useDispatch();

    return <LanguageSelectContainer
        className="hidden sm:block"
        value={(app.languages)}
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
}


export default LanguageSelect