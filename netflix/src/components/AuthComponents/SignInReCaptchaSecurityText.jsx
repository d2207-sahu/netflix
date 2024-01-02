import React from "react";
import { translationConfig } from "../../config/translation-config";
import { LinkHrefText } from "../globals";
import { recapcthaLinkHref, recapcthaLinkText } from "../../config/constants";

const SignInReCaptchaSecurityText = () => (
    <div className="mt-5">
        {translationConfig.authRecapthcaSecurityText}
        <a href={recapcthaLinkHref}>
            <LinkHrefText >
                {recapcthaLinkText}</LinkHrefText>
        </a>
    </div >);

export default SignInReCaptchaSecurityText;