import MovieCard from '../MovieCard/MovieCard';
import { Stack } from '@mui/material';
import {} from 'react-router-dom';
import React from 'react';

export default function MovieList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
    </>
  );
}
