import { baseFetchAPI } from '../api.service';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('video');
  const movieVideoData = await baseFetchAPI('GET', `movie/${videoId}/videos`, null);
  return Response.json({ data: movieVideoData });
}
