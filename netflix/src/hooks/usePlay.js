import { useDispatch } from "react-redux";
import useMovieVideos from "./useMovieVideos";
import useMoviesRecentlyPlayed from "./useMoviesRecentlyPlayed";
import { useEffect } from "react";
import { updateModalSelectedVideo } from "../redux/slices/appSlice";

/**
 * Use Play Hook
 * @function usePlay 
 * @description This function exposes play functionality to the component calling it
 * @param {onAfterClick} Function It is passed to handle the back button 
 * @param {movieData} Function Manadatory, It is passed to handle the back button 
 * @param {movieID} Function Optional pass it to get the videoData
 * @param {videoID} Function Optional, can pass the videoData directly or can send the movieID
 * @returns {onPlayClick, pending}
 */
const usePlay = ({ onAfterClick, movieID, videoID, movieData }) => {
    // Have to have the videoData
    const [getMovieVideos, videos, pending] = useMovieVideos({ movieID });
    // Have to save to the recentlyPlayed
    const { saveMovieToRecentlyPlayed } = useMoviesRecentlyPlayed();
    const dispatch = useDispatch();

    // This runs the whole component when the videoData is loaded for the movieData
    useEffect(() => {
        if (videos.length >= 1) {
            if (videos[0].key) {
                saveMovieToRecentlyPlayed(movieData)
                dispatch(updateModalSelectedVideo(videos[0].key));
            }
            if (onAfterClick)
                onAfterClick()
        }
    }, [videos]);

    // Actual Function returned so that can be placed in the onClick Listenners
    const onPlayClick = () => {
        if (movieID) {
            getMovieVideos();
        } else {
            if (videoID)
                dispatch(updateModalSelectedVideo(videoID));
            if (onAfterClick)
                onAfterClick()
        }
    }

    return { onPlayClick, pending }
}

export default usePlay