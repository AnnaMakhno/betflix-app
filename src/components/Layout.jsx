import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import React from 'react';

export default function Layout() {
  return (
    <Container fixed>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
