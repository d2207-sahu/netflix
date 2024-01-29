export const movieTypes = [
  { keyword: 'upcoming', title: 'Upcoming', firebase_data: false, ui_data: true },
  { keyword: 'popular', title: 'Popular', firebase_data: false, ui_data: true },
  { keyword: 'played', title: 'Recently Played for ${user}', firebase_data: true, ui_data: false },
  { keyword: 'top_rated', title: 'Top Rated', firebase_data: false, ui_data: true },
  { keyword: 'saved', title: 'My List', firebase_data: true, ui_data: false },
  { keyword: 'now_playing', title: 'Now Playing', firebase_data: false, ui_data: true },
  { keyword: 'searched', title: 'Recommendations', firebase_data: true, ui_data: false },
];
