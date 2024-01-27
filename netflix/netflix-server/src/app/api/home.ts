export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
    headers: {
      'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY!,
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDljNmM5MDNhOGNhYmZiZDg2ODgxNDljYmQ5NmY3NCIsInN1YiI6IjY1OGE3ZTQ0NzY0NmZkNGVlMTA1NmE3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yv_O8mCvOp9kLixRhnDSBDvMLrdbY_3osbbYzwRBVeE"
    }
  });
  const product = await res.json();

  return Response.json({ product });
}
