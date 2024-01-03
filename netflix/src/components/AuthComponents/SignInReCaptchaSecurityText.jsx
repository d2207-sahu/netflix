import React from "react";
import { LinkHrefText, SmallText } from "../globals";
import { recapcthaLinkHref, recapcthaLinkText } from "../../config/constants";
import { useLanguage } from "../../context/LanguageContext";

const SignInReCaptchaSecurityText = () => {
    const { languageData } = useLanguage();
    return (

        <div className="mt-5">
            <SmallText $grey>{!languageData ? '' : languageData?.authRecapthcaSecurityText}</SmallText>
            <a href={recapcthaLinkHref} target="_blank" rel="noreferrer">
                <LinkHrefText >
                    {recapcthaLinkText}</LinkHrefText>
            </a>
        </div >)
};

export default SignInReCaptchaSecurityText;