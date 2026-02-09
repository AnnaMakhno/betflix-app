import React from 'react';
import { useSelector } from 'react-redux';

import { TOP_LISTS } from '../constants';
import {
  useGetFilmsQuery,
  useGetFilmsTopQuery,
} from '../services/kinopoiskApi';

export default function useMoviesQuery() {
  const { countries, order, year, page } = useSelector(
    state => state.currentQuerySlice,
  );

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({ type: TOP_LISTS[1].value, page });

  const responseFilms = useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId: 1,
    order,
    year,
    page,
  });

  const responseSerials = useGetFilmsQuery({
    type: 'TV_SERIES',
    countries,
    genreId: 1,
    order,
    year,
    page,
  });
  const responseCartoons =useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId: 18,
    order,
    year,
    page,
  });

  const isLoading =
    responsePopular.isLoading ||
    responseBest.isLoading ||
    responseFilms.isLoading ||
    responseSerials.isLoading ||
    responseCartoons.isLoading;

  const isError =
    responsePopular.isError ||
    responseBest.isError ||
    responseFilms.isError ||
    responseSerials.isError ||
    responseCartoons.isError;

  return {
    isLoading,
    isError,
    responsePopular,
    responseBest,
    responseFilms,
    responseSerials,
    responseCartoons,
  };
}
