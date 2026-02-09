import {
  AutoAwesome,
  Bloodtype,
  FamilyRestroom,
  Fort,
  LiveTv,
  LocalMovies,
  MenuBook,
  MoodBad,
  Pool,
  Reorder,
  StarPurple500,
  VolunteerActivism,
} from '@mui/icons-material';

export const ICONS = {
  AutoAwesome,
  StarPurple500,
  FamilyRestroom,
  VolunteerActivism,
  Bloodtype,
  MenuBook,
  MoodBad,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
};

export const TOP_LISTS = [
  {
    title: 'Топ 100 популярных фильмов',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'Топ 250 лучший фильмов',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Вампиры',
    icon: 'Bloodtype',
    url: '/vampires',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейные фильмы',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Зомби',
    icon: 'MoodBad',
    url: '/zombies',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Катастрофы',
    icon: 'Pool',
    url: '/catastrophes',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/popular-series',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies',
    url: '/films',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder',
    url: '/series',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort',
    url: '/cartoons',
  },
];
