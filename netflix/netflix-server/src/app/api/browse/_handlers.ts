import { movieTypes } from '../_constants';
import { VideoInfo } from '../_modals';
import { baseFetchAPI } from '../api.service';

export const carouselHandler = async (data: any) => {
  try {
    const homePageMoviesData = await Promise.allSettled([
      ...movieTypes.map((movieType) => {
        if (movieType.ui_data)
          return baseFetchAPI('GET', `movie/${movieType.keyword}?language=en-US&page=1`, null);
        return 'Retrive Firebase Data';
      })
    ]);
    data.carousel = homePageMoviesData.map((responseData, index) => {
      if (responseData.status === 'fulfilled') {
        if (responseData.value.results) {
          data.banner.movieData = responseData.value.results && responseData.value.results[0];
          if (!data.banner.movieData) data.banner.movieData = responseData.value.results[1];
        }
        return {
          ...movieTypes[index],
          data: responseData.value
        };
      } else {
        console.error(responseData);
        return {
          title: movieTypes[index],
          error: `Error fetching the ${movieTypes[index]} data`
        };
      }
    });
  } catch (error) {
    console.log(error);
    data.banner.movieData = 'Error fetching banner movie data';
    data.carousel = 'Error fetching the carousel data';
  }
  return data;
};

export const bannerHandler = async (banner: any) => {
  if (banner.movieData !== null && banner.movieData instanceof Object) {
    try {
      banner.videoData = await baseFetchAPI('GET', `movie/${banner.movieData?.id}/videos`, null);
      const videos = banner.videoData && banner.videoData.results;
      if (videos && Array.isArray(videos)) {
        let trailerVideo = videos.find((video: VideoInfo) => {
          return video.type === 'Trailer';
        });

        // If no trailer is found, find the first video with type 'Teaser'
        if (!trailerVideo) {
          trailerVideo = videos.find((video: VideoInfo) => {
            return video.type === 'Teaser';
          });
        }

        // Update data.banner.videoData with the found video (either trailer or teaser)
        banner.videoData = trailerVideo;
      }
    } catch (error) {
      console.error(error);
      banner.videoData = 'Error fetching banner video background data';
    }
  }
  return banner;
};
