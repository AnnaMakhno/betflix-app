import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack, Typography } from '@mui/material';
import { TOP_LISTS } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import MoviesList from '../../ui/MovieList';
import React, { use } from 'react';

export default function MoviesListTop() {
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();

  const movieType = TOP_LISTS.find(el => el.url === window.location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page: page,
  });

  if (error) {
    return <div>Ошибка при загрузке данных</div>;
  }

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  console.log(data);

  return (
    <>
      <Stack direction="row" sx={{ mt: 2, mb: 2 }}>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} />
        <Typography variant="h4">{movieType.title}</Typography>
      </Stack>
      <MoviesList
        movies={data.items}
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
