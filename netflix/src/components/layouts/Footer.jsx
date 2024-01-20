import React from 'react'
import LanguageSelect from '../HeaderComponents/LanguageSelect'
import { LinkHrefText } from '../globals'

const Footer = () => {
    return (
        <div className="w-screen px-20 py-5 flex flex-col justify-start items-start">
            <div>Questions? Call 000-800-919-1694</div>
            <div className="flex flex-wrap w-[100%]">
                <LinkHrefText >HHSKADH</LinkHrefText>
                <LinkHrefText >HHSKeweADH</LinkHrefText>
                <LinkHrefText >HHSasdKADH</LinkHrefText>
                <LinkHrefText >asd</LinkHrefText>
                <LinkHrefText >ewe</LinkHrefText>
            </div>
            <LanguageSelect />
        </div>
    )
}

export default Footer