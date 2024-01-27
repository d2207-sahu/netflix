import { baseFetchAPI } from '../api.service';
export const dynamic = 'force-dynamic';
const movieTypes = ['upcoming', 'popular', 'top_rated', 'now_playing'];

export async function GET(request: Request) {
  const homePageMoviesData = await Promise.allSettled([
    ...movieTypes.map((movieType) => {
      return baseFetchAPI('GET', `movie/${movieType}?language=en-US&page=1`, null);
    })
  ]);
  const data = homePageMoviesData.map((responseData, index) => {
    if (responseData.status === 'fulfilled') {
      return {
        title: movieTypes[index],
        data: responseData.value
      };
    } else {
      return {
        title: movieTypes[index],
        error: responseData
      };
    }
  });

  return Response.json({ data: data });
}
