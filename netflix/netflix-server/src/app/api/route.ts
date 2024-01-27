export const dynamic = 'force-dynamic'; // defaults to auto
export async function GET(request: Request) {
  const data = 'Netflix backend';

  return Response.json({ data });
}
