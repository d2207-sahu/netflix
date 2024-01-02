import React from "react";
import { NormalText } from "../globals";
import { LinkText } from "../LinkText";
import { routingConfig } from "../../router/routing-config";
import { Theme } from "../../styles/theme";
import { translationConfig } from "../../config/translation-config";

const ToggleSignUpAndSignInComponent = ({ isSignin }) => {
    return (
        <div className='flex flex-row items-baseline pt-[2rem]'>
            <NormalText
                $grey
                className={`text-[${Theme.text.BGBlack.Grey}] pr-2`}>
                {isSignin ?
                    translationConfig.newToNetflix :
                    translationConfig.alreadySignedUp}
            </NormalText>
            <LinkText
                to={isSignin ?
                    routingConfig.signup :
                    routingConfig.login}
                text={isSignin ?
                    translationConfig.signUpNow :
                    translationConfig.signInNow} />
        </div>
    );
}
export default ToggleSignUpAndSignInComponent;