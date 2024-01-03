import React from 'react';
import { Heading, NormalText } from '../../components/globals';
import { ButtonG, ButtonW } from '../../components/globals/Button';
import VideoBackground from './VideoBackground';
import { FiInfo, FiPlay } from 'react-icons/fi';
import { useLanguage } from '../../context/LanguageContext';

const MainVideoContainerBackground = (movies) => {
  // Had to handle this case very efficiently
  if (!movies.props) return <>Loading..</>;
  const { title, overview, id } = movies.props[0];

  // TODO remove grasdient and havbe all the text this calss
  // text-shadow: 0 1px 1px rgba(0,0,0,.7);

  return (
    <div>
      <div className="flex flex-col justify-center items-start h-screen overflow-hidden top-0 bottom-0 absolute pl-[5%] bg-gradient-to-r from-black">
        <MovieTitle title={title} className={'lg:w-[45vw] sm:w-[90vw]'} />
        {/* Have this fade out later on  */}
        <MovieDescription desc={overview} className={'lg:w-[30vw] sm:w-[60vw]'} />
        <div className="flex mt-6">
          {/* Had to add appropriated Buttons with images at the start */}
          <PlayButton />
          <MoreInfoButton />
        </div>
      </div>
      <VideoBackground movieID={id} />
    </div>
  );
};

export const MovieDescription = ({ desc, className }) => {
  return (
    <NormalText $showShadow className={className}>
      {desc}
    </NormalText>
  );
};
export const MovieTitle = ({ title, className }) => {
  return (
    <Heading $showShadow className={className}>
      {title}
    </Heading>
  );
};

export const PlayButton = ({ onClick }) => {
  const { languageData } = useLanguage();
  return (
    <ButtonW onClick={onClick} className="mr-4 flex items-center gap-2">
      <FiPlay size={'3.5rem'} fill="black" />
      {!languageData ? '' : languageData?.play}
    </ButtonW>
  );
};

export const MoreInfoButton = ({ onClick }) => {
  const { languageData } = useLanguage();
  return (
    <ButtonG onClick={onClick} className="mr-4 flex items-center gap-2">
      <FiInfo size={'3.5rem'} />
      {!languageData ? '' : languageData?.moreInfo}
    </ButtonG>
  );
};

export default MainVideoContainerBackground;
