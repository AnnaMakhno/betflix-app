import { Pagination, Stack } from '@mui/material';
import React from 'react';

import MovieCard from '../MovieCard';

export default function MovieList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack direction="row" justifyContent="center" flexWrap="wrap">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>
      <Stack alignItems="center" mt={2}>
        <Pagination
          count={totalPages}
          color="primary"
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={(_, newPage) => setPage(newPage)}
        />
      </Stack>
    </>
  );
}