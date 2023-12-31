import styled from "styled-components";
import React, { useState } from 'react'
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { NormalText } from "./globals";

export const SliderContainer = styled.div`
    min-width: 100%;
    justify-content: center;
    display: flex;
    overflow-x: clip; 
    overflow-y: visible !important;
`;

export const Slider = styled.div`
    display: flex;
    width: 94%;
    transform: translateX(${props => props.$sliderIndex});
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-duration: 500ms;
`;

const MovieCard = styled.div`
    flex: 0 0 20%;
    max-width: 20%;
    @media (width: 600px) {
        flex: 0 0 33.3%;
        max-width: 33.3%;
    }
    @media (max-width: 1024px) {
        flex: 0 0 25%;
        max-width: 25%;
    }
    background-color: #191919;
    aspect-ratio: 16/9;
    margin: .25rem;
    border-radius: 0.5rem;
    transition-duration: 1000ms;
    transition: ease-in;

    &:hover{
        position: relative;
        z-index: 20;
        scale: 1.2;
        translate: 0 -50px;
        transition-duration: 1000ms;
        transition: ease-out;
    }
`

export const MovieCardComponent = () => {
    const [onMouseOver, setOnMouseOver] = useState(false);
    return (
        <MovieCard className="bg-white"
            onMouseOver={(event) => {
                event.preventDefault();
                setOnMouseOver(true);
            }}
            onMouseLeave={
                (event) => {
                    event.preventDefault();
                    setOnMouseOver(false);
                }
            }>
            <img className="min-w-[100%]" src="https://image.tmdb.org/t/p/w300/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg" ></img>
            {onMouseOver && <NormalText>{"movieDetail.original_title"} {"movieDetail.popularity"} {"movieDetail.original_language"}</NormalText>}

        </MovieCard>
    )
}

const Handle = styled.button`
    display: flex;
    flex-grow: 0;
    border: none;
    border-radius:0.5rem;
    width: 3%;
    background-color: #42424265;
    z-index: 10;
    margin: .25rem 0;
    cursor: pointer;
    border-radius: 0.5rem;
    padding: 1rem;
    color: white;
`;

export const LeftHandle = styled(Handle)`
    &:hover{
        background-color: rgba(22, 22, 22, 0.293);
        scale: 1.3;

    }
`

export const RightHandle = styled(Handle)`
    margin-right: ${props => props.$marginRight ?? '0'};
   &:hover{
        background-color: rgba(22, 22, 22, 0.293);
        scale: 1.3;
    }
`;

const NetflixCaraousel = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    return (
        <div>
            <SliderContainer>
                <LeftHandle
                    onClick={() => {
                        setSliderIndex(prev => prev - 1);
                    }} >
                    <FiArrowLeft size={30} className="m-auto" />
                </LeftHandle>
                <Slider $sliderIndex={`${(sliderIndex * 100)}%`}>
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                    <MovieCardComponent />
                </Slider>
                <RightHandle
                    onClick={() => {
                        setSliderIndex(prev => prev + 1);
                    }} >
                    <FiArrowRight size={30} className="m-auto" />
                </RightHandle>
            </SliderContainer>
        </div>
    )
}

export default NetflixCaraousel
