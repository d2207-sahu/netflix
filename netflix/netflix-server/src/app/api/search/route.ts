import { baseFetchAPI } from '../api.service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchKeyword: string | null = searchParams.get('query');
    const page: string = searchParams.get('page') ?? '1';
    if (!searchKeyword)
      return Response.json({ data: 'No search keyword provided.' }, { status: 400 });
    if (searchKeyword.length === 0)
      return Response.json({ data: 'Query cannot be empty.' }, { status: 400 });

    const searchResults = await baseFetchAPI(
      'GET',
      `search/movie?query=${searchKeyword}&page=${page}`,
      null
    );
    if (searchResults && searchResults.results)
      return Response.json(
        {
          searchResults: searchResults.results,
          length: searchResults.results.length,
          page: searchResults.page
        },
        { status: 200 }
      );
  } catch (e) {
    console.error(e);
    return Response.json({ data: 'Error fetching saerch data' }, { status: 400 });
  }
}
