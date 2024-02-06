import React from 'react'
import Header from '../components/layouts/Header'
import { Heading, NormalText, PrefferedRectangleButton, } from '../components/globals'
import { useNavigate } from 'react-router-dom'
import { routingConfig } from '../router/routing-config'
import Footer from '../components/layouts/Footer'
import { useLanguage } from '../context/LanguageContext'

const AnonymousPage = () => {
    const { languageData } = useLanguage();
    const navigate = useNavigate();
    return (
        <div>
            <Header></Header>
            <div className='flex flex-col sm:items-center items-start pl-5 justify-center w-screen h-screen p-5 pt-[15%]'>
                <Heading >{languageData?.errorHeading}</Heading>
                <NormalText >{languageData?.errorExplanation}</NormalText>
                <NormalText >{languageData?.errorDescription}</NormalText>
                <div className='flex gap-3 pt-3 m-3'>
                    <PrefferedRectangleButton onClick={() => { navigate(routingConfig.index) }}>{languageData?.errorPageCTA}</PrefferedRectangleButton>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AnonymousPage