import { baseFetchAPI } from '../api.service';

export const moviesHandler = async (data: any, movieID: any) => {
  try {
    if (movieID !== null) {
      const moviessData = await baseFetchAPI('GET', `movie/${movieID}`, null);
      data.movies = moviessData;
    }
  } catch (error) {
    console.error(error);
    data.credits = 'Error fetching movies data';
  }
  return data;
};

export const creditsHandler = async (data: any, movieID: any) => {
  try {
    if (movieID !== null) {
      const creditsData = await baseFetchAPI('GET', `movie/${movieID}/credits`, null);
      data.credits = creditsData;
    }
  } catch (error) {
    console.error(error);
    data.credits = 'Error fetching credits data';
  }
  return data;
};

export const similarHandler = async (data: any, movieID: any) => {
  try {
    if (movieID !== null) {
      const similarData = await baseFetchAPI('GET', `movie/${movieID}/similar`, null);
      data.similar = similarData.results;
    }
  } catch (error) {
    console.error(error);
    data.credits = 'Error fetching similar data';
  }
  return data;
};

export const videosHandler = async (data: any, movieID: any) => {
  try {
    if (movieID !== null) {
      const videoData = await baseFetchAPI('GET', `movie/${movieID}/videos`, null);
      data.videos = videoData.results;
    }
  } catch (error) {
    console.error(error);
    data.credits = 'Error fetching videos data';
  }
  return data;
};
