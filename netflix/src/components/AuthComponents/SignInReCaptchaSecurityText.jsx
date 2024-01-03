import React from "react";
import { translationConfig } from "../../config/translation-config";
import { LinkHrefText, SmallText } from "../globals";
import { recapcthaLinkHref, recapcthaLinkText } from "../../config/constants";

const SignInReCaptchaSecurityText = () => (
    <div className="mt-5">
        <SmallText $grey>{translationConfig.authRecapthcaSecurityText}</SmallText>
        <a href={recapcthaLinkHref} target="_blank" rel="noreferrer">
            <LinkHrefText >
                {recapcthaLinkText}</LinkHrefText>
        </a>
    </div >);

export default SignInReCaptchaSecurityText;