import React, { useState } from 'react';
import { ExploreMoreText, Heading, SubHeading } from '../../components/globals';
import MovieCardComponent from '../../components/MovieCard';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SliderContainer } from '../../components/globals/SliderContainer';
import { LeftHandle, RightHandle } from '../../components/globals/SliderHandlers';
import { Slider } from '../../components/globals/Slider';

const MoviesCarousel = ({ title, movieCards, viewMoreText, noData }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [onMouseHover, setMouseHover] = useState(false);
    if (!movieCards) return <Heading>{noData}</Heading>;
    const showHandles = movieCards?.length > 5;
    const maxCountHandle = -(movieCards?.length / 5);
    return (
        <div
            onMouseOver={() => {
                setMouseHover(true);
            }}
            onMouseLeave={() => {
                setMouseHover(false);
            }}
        >
            <div className="flex gap-5">
                <SubHeading className="pl-[3.1%] mt-12 pt-12 mb-8 font-bold text-sm" $fontSize={'2.0rem'}>
                    {title}
                </SubHeading>
                {onMouseHover ? <ExploreMoreText>{viewMoreText}</ExploreMoreText> : <></>}
            </div>
            <SliderContainer>
                {showHandles && (
                    <LeftHandle
                        $dontShow={sliderIndex < 0 ? 'flex' : 'hidden'}
                        onClick={() => {
                            setSliderIndex((prev) => {
                                if (prev < 0) return prev + 1;
                            });
                        }}
                    >
                        {sliderIndex < 0 && onMouseHover && <FiArrowLeft size={30} className="m-auto" />}
                    </LeftHandle>
                )}
                <Slider $sliderIndex={`${sliderIndex * 100}%`}>
                    {movieCards?.map((movieDetail) => (
                        <MovieCardComponent key={movieDetail?.id} movieDetail={movieDetail} />
                    ))}
                </Slider>
                {showHandles && (
                    <RightHandle
                        onClick={() => {
                            if (!sliderIndex) setSliderIndex(0);
                            if (sliderIndex < maxCountHandle + 1) return;
                            setSliderIndex((prev) => prev - 1);
                        }}
                        $marginRight="16px"
                    >
                        {sliderIndex > maxCountHandle && onMouseHover && (
                            <FiArrowRight size={30} className="m-auto" />
                        )}
                    </RightHandle>
                )}
            </SliderContainer>
        </div>
    );
};


export default MoviesCarousel;