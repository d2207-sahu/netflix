import { baseFetchAPI } from '../api.service';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const movieId = searchParams.get('movieId');
  const movieVideoData = await baseFetchAPI('GET', `movie/${movieId}/videos`, null);
  return Response.json({ data: movieVideoData?.results });
}
