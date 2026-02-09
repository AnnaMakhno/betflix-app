import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_KINOPOISK_API_KEY;

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `/v2.2/films/collections?type=${type}&page=${page}`,
    }),
    getFilms: builder.query({
      query: ({
        countries,
        genreId,
        order = 'NUM_VOTE',
        type = 'FILM',
        year,
        page,
      }) =>
        `/v2.2/films?countries=${countries}&genres=${genreId}&order=${order}&type=${type}&year=${year}&page=${page}`,
    }),
  }),
});

export const { useGetFilmsTopQuery, useGetFilmsQuery } = kinopoiskApi;