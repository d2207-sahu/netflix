import React from 'react';
import {useSelector} from 'react-redux';
import {Heading, NormalText} from '../../components/globals';
import {ButtonG, ButtonW} from '../../components/globals/Button';
import VideoBackground from './VideoBackground';

const MainVideoContainerBackground = (props) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //   if (!movies) return <></>;
  const {title, overview, id} = props.props;
  console.log(props.props);
  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen top-0 bottom-0 absolute pl-[10%]  bg-gradient-to-r from-black">
        <Heading>{title}</Heading>
        <NormalText className="w-[30vw]">{overview}</NormalText>
        <div>
          <ButtonW className="mr-4">Play</ButtonW>
          <ButtonG>More Info</ButtonG>
        </div>
      </div>
      <VideoBackground movieID={id}  />
    </>
  );
};

export default MainVideoContainerBackground;
