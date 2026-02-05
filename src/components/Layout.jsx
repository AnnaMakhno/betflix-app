import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import React from 'react';

export default function Layout() {
  return (
    <Container
      fixed
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Box sx={{ p: 4 }} />
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
