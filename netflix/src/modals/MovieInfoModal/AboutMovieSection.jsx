import React, { useMemo } from 'react'
import MovieCreditsSection from '../../components/MovieComponents/MovieCreditsSection';
import { SubHeading } from '../../components/globals';
import { useLanguage } from '../../context/LanguageContext';

const AboutMovieSection = ({ title, credits }) => {
    const { languageData } = useLanguage();

    // {
    //     "adult": false,
    //     "gender": 1 F, 2 M 
    //     "id": 568657,
    //     "known_for_department": "Acting",
    //     "name": "Sofia Boutella",
    //     "original_name": "Sofia Boutella",
    //     "popularity": 141.762,
    //     "profile_path": "/lGFhhjcjARQCM8AiGidyyyfDowh.jpg",
    //     "cast_id": 12,
    //     "character": "Kora",
    //     "credit_id": "61818dfd11386c002a9b6ed9",
    //     "order": 0
    // }

    const CerditsSectionMemo = useMemo(() => {
        const CreditsData = {};
        credits?.cast.forEach(item => {
            const type = item.known_for_department;
            if (!CreditsData[type]) {
                CreditsData[type] = [item];
            } else {
                CreditsData[type].push(item);
            }
        });
        let CeditSections = [];
        Object.keys(CreditsData).forEach((creditsType) => {
            let elements;
            if (creditsType === "Acting") {
                elements =
                    <MovieCreditsSection
                        category={creditsType}
                        entities={CreditsData[creditsType].sort((a, b) => b.popularity - a.popularity).slice(0, 10).map((e) => e.name)} />
            }
            elements = <MovieCreditsSection category={creditsType} entities={CreditsData[creditsType].map((e) => e.name)} />
            CeditSections = CeditSections.concat(elements);
        });
        return CeditSections
    }, [credits?.cast]);
    return <div className='flex flex-col w-[100%]'>
        <SubHeading>{!languageData ? '' : languageData?.about}{title}</SubHeading>
        {CerditsSectionMemo}
    </div>;
}

export default AboutMovieSection