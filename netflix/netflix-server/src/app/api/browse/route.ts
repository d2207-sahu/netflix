export const dynamic = 'force-dynamic';
import { bannerHandler, carouselHandler } from './_handlers';

export async function GET(request: Request) {
  try {
    let data: any = { banner: {} };
    data = await carouselHandler(data);
    data.banner = await bannerHandler(data.banner);
    return Response.json(
      { data },
      { status: 200, headers: { 'Content-type': 'application/json' } }
    );
  } catch (e) {
    console.error(e);
    return Response.json({ data: 'Error fetching browse data' }, { status: 400 });
  }
}
