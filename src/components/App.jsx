import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import MoviesDetails from './pages/MovieDetails';
import ActorDetails from './pages/ActorDetails';
import MoviesPage from './pages/Movies';
import Layout from './Layout.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MoviesPage />,
        },
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
