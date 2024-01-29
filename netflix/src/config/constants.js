export const TMDB_API_KEY = process.env['REACT_APP_TMDB_API_KEY'];
export const TMDB_API_IMAGE_CDN_URL =
  process.env['REACT_APP_PROXY_DOMAIN'] + process.env['REACT_APP_TMDB_API_IMAGE_CDN_URL'];
export const BASE_API_URL =
  process.env['REACT_APP_PROXY_DOMAIN'] + process.env['REACT_APP_BASE_API_URL'];
export const MOVIE_API_URL = 'movie/';
export const BACKEND_API_URL = 'http://localhost:3000/api' ;
export const NOW_PLAYING_API_URL = MOVIE_API_URL + 'now_playing';
export const TOP_RATED_API_URL = MOVIE_API_URL + 'top_rated';
export const UPCOMING_API_URL = MOVIE_API_URL + 'upcoming';
export const POPULAR_API_URL = MOVIE_API_URL + 'popular';
export const MOVIE_DATA = 'movie/{movie_id}';
export const TEASER = 'Teaser';
export const TRAILER = 'Trailer';
export const MOVIE_DATA_VIDEO = `${MOVIE_DATA}/videos`;
export const MOVIE_DATA_CREDIT = `${MOVIE_DATA}/credits`;
export const MOVIE_DATA_RECOMMENDATION = `${MOVIE_DATA}/similar`;
export const SEARCH_API_URL = 'search/movie';
export const ALL_GENRE = '/genre/movie/list';
export const recapcthaLinkText = '<![CDATA[<b>Learn more.</b>]]>';
export const recapcthaLinkHref = 'https://policies.google.com/privacy';
export const Languages = {
  'en-IN': 'English',
  'hi-IN': 'हिन्दी'
};
