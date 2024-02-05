import { baseFetchAPI } from '../api.service';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const baseResponseData: any = {};
  if (searchParams.get('genre') === '1') {
    const genreData = await baseFetchAPI('GET', `genre/movie/list`, null);
    baseResponseData['genre'] = genreData?.genres;
  }
  return Response.json({ data: baseResponseData });
}
