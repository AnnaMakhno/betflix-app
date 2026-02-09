import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MOVIE_LISTS, TOP_LISTS } from '../constants.js';
import Layout from './Layout.jsx';
import ActorDetails from './pages/ActorDetails';
import MoviesDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import MoviesListMain from './pages/MoviesListMain';
import MoviesListTop from './pages/MoviesListTop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies />,
        },
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListTop />,
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />,
        })),
        {
          path: '/movie/:id',
          element: <MoviesDetails />,
        },
        {
          path: '/actor/:id',
          element: <ActorDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
