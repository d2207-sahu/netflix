import React from 'react'
import { ButtonG } from '../globals';
import { FiInfo } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';


const MovieInfoButton = ({ onClick }) => {
    const { languageData } = useLanguage();
    return (
        <ButtonG onClick={onClick} className="mr-4 flex items-center gap-2">
            <FiInfo size={'3.5rem'} />
            {!languageData ? '' : languageData?.moreInfo}
        </ButtonG>
    );
};
export default MovieInfoButton