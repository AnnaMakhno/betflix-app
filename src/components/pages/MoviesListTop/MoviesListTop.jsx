import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TOP_LISTS } from '../../../constants';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi';
import MoviesList from '../../ui/MovieList';

export default function MoviesListTop() {
  const location = useLocation();
  const [page, setPage] = React.useState(1);
  const navigate = useNavigate();
  const movieType = TOP_LISTS.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page: page,
  });

  useEffect(() => {
    setPage(1);
  }, [location]);

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
