import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Link,
  Divider,
} from '@mui/material';
import { ICONS, TOP_LISTS, MOVIE_LISTS } from '../../../constants';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  const trigger = useScrollTrigger({
    target: window,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

            <Drawer open={isOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List>
                  {TOP_LISTS.map(item => {
                    const IconComponent = ICONS[item.icon];
                    return (
                      <Link component={RouterLink} to={item.url} key={item.url}>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemIcon>
                              <IconComponent />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
                <Divider />
                <List>
                  {MOVIE_LISTS.map(item => {
                    const IconComponent = ICONS[item.icon];
                    return (
                      <Link component={RouterLink} to={item.url} key={item.url}>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemIcon>
                              <IconComponent />
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
            <Typography
              sx={{ color: 'white', textDecoration: 'none' }}
              variant="h4"
              component={RouterLink}
              to="/"
            >
              betflix
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
