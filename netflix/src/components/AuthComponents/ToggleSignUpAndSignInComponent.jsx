import React from "react";
import { NormalText } from "../globals";
import { LinkText } from "../LinkText";
import { routingConfig } from "../../router/routing-config";
import { Theme } from "../../styles/theme";
import { useLanguage } from "../../context/LanguageContext";

const ToggleSignUpAndSignInComponent = ({ isSignin }) => {
    const { languageData } = useLanguage();

    return (
        <div className='flex flex-row items-baseline pt-[2rem]'>
            <NormalText
                $grey
                className={`text-[${Theme.text.BGBlack.Grey}] pr-2`}>
                {isSignin ?
                    !languageData ? '' : languageData?.newToNetflix :
                    !languageData ? '' : languageData?.alreadySignedUp}
            </NormalText>
            <LinkText
                mobileShow={true}
                to={isSignin ?
                    routingConfig.signup :
                    routingConfig.login}
                text={isSignin ?
                    !languageData ? '' : languageData?.signUpNow :
                    !languageData ? '' : languageData?.signInNow} />
        </div>
    );
}
export default ToggleSignUpAndSignInComponent;