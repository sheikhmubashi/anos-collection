import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from '@material-ui/core';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';

function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Anos Collection` : 'Anos Collection'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Anos Collection
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Anos Collection.</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default Layout;
