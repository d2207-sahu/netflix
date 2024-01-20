import React from 'react'
import LanguageSelect from '../HeaderComponents/LanguageSelect'
import { FooterLinkText, NormalText } from '../globals'
import { useSelector } from 'react-redux';

const Footer = () => {
    const { footerConfig } = useSelector((store) => store.config);
    return footerConfig.isVisible ?
        <div className="w-screen sm:flex hidden bottom-0 mt-10 bg-opacity-75 bg-[#000000bf]">
            <div className="px-20 py-5 mx-auto max-w-[1000px] min-w-[70%] flex mt-0 flex-col justify-start items-start">
                <NormalText
                    className="my-10">
                    {footerConfig.ctaHeading}
                    <a
                        href={footerConfig.ctaLink}>
                        {footerConfig.ctaLinkText}
                    </a></NormalText>
                <div className="flex mb-10 justify-between flex-wrap w-[100%]">
                    {footerConfig.footerLink.map((e) => {
                        return <a
                            key={e.text}
                            href={e.href}>
                            <FooterLinkText
                                className="pr-20" >
                                {e.text}</FooterLinkText>
                        </a>
                    })}
                </div>
                <LanguageSelect />
                <div className="m-[5vh]"></div>
            </div>
        </div> : <></>
}

export default Footer