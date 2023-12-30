import React from 'react';
import {Heading, NormalText} from '../../components/globals';
import {ButtonG, ButtonW} from '../../components/globals/Button';
import VideoBackground from './VideoBackground';

const MainVideoContainerBackground = (movies) => {
  // Had to handle this case very efficiently
  if (!movies.props) return <>Loading..</>;
  const {title, overview, id} = movies.props[0];
  
  // TODO remove grasdient and havbe all the text this calss
  // text-shadow: 0 1px 1px rgba(0,0,0,.7);

  return (
    <div>
      <div className="flex flex-col justify-center h-screen overflow-hidden top-0 bottom-0 absolute pl-[5%] bg-gradient-to-r from-black">
        <Heading className="lg:w-[45vw] sm:w-[90vw]">{title}</Heading>
        <NormalText className="lg:w-[30vw] sm:w-[60vw]">{overview}</NormalText>
        <div>
          {/* Had to add appropriated Buttons with images at the start */}
          <ButtonW className="mr-4">Play</ButtonW>
          <ButtonG>More Info</ButtonG>
        </div>
      </div>
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainVideoContainerBackground;
