import { creditsHandler, moviesHandler, similarHandler, videosHandler } from './_handlers';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const movieID: string | null = searchParams.get('movieID');
    let data: any = {};
    await moviesHandler(data, movieID);
    await creditsHandler(data, movieID);
    await similarHandler(data, movieID);
    await videosHandler(data, movieID);
    return Response.json(
      { data },
      { status: 200, headers: { 'Content-type': 'application/json' } }
    );
  } catch (e) {
    console.error(e);
    return Response.json({ data: 'Error fetching browse data' }, { status: 400 });
  }
}
