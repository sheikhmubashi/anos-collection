import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  Badge,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  InputBase,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import SearchIcon from '@material-ui/icons/Search';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from '@material-ui/core';
import { useContext } from 'react';
import Cookies from 'js-cookie';
import { Store } from '../utils/Store';
import { getError } from '../utils/error';

import Head from 'next/head';
import NextLink from 'next/link';
import React from 'react';
import useStyles from '../utils/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useEffect } from 'react';
import Image from 'next/image';
import logo from '../hfshoplogo.png'
function Layout({ title, description, children }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const classes = useStyles();
  const [sidbarVisible, setSidebarVisible] = useState(false);
  // const sidebarOpenHandler = () => {
  //   setSidebarVisible(true);
  // };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
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
    <div >
      <Head >
        <title>
          {title ? `${title} - Anos Collection` : 'Anos Collection'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
              {/* <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={sidebarOpenHandler}
                className={classes.menuButton}
              >
                <MenuIcon className={classes.navbarButton} />
              </IconButton> */}
              <NextLink href="/" passHref>
                <Link>
                  {/* <Typography className={classes.brand}>Anos Collection</Typography> */}
                  <Typography className={classes.brand}>
                    <Image src={logo} alt="logo" width={"100"} height={"40"} />
                  </Typography>
                </Link>
              </NextLink>
            </Box>
            <Drawer
              anchor="left"
              open={sidbarVisible}
              onClose={sidebarCloseHandler}
            >
              <List>
                <ListItem>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography><strong>Shopping by category</strong></Typography>
                    <IconButton
                      aria-label="close"
                      onClick={sidebarCloseHandler}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider light />
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <ListItem
                      button
                      component="a"
                      onClick={sidebarCloseHandler}
                    >
                      <ListItemText primary={category}></ListItemText>
                    </ListItem>
                  </NextLink>
                ))}
              </List>
            </Drawer>
            <div className={classes.searchSection}>
              <form onSubmit={submitHandler} className={classes.searchForm}>
                <InputBase
                  name="query"
                  className={classes.searchInput}
                  placeholder="Search products"
                  onChange={queryChangeHandler}
                />
                <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </form>
            </div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link>
                  <Typography component="span">
                    {cart.cartItems.length > 0 ? (
                      <Badge
                        color="secondary"
                        badgeContent={cart.cartItems.length}
                      >
                        Cart
                      </Badge>
                    ) : (
                      'Cart'
                    )}
                  </Typography>
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order Hisotry
                    </MenuItem>
                    {userInfo.isAdmin && (
                      <MenuItem
                        onClick={(e) =>
                          loginMenuCloseHandler(e, '/admin/dashboard')
                        }
                      >
                        Admin Dashboard
                      </MenuItem>
                    )}
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>
                    <Typography component="span">Login</Typography>
                  </Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
          <div className={classes.parentCatogaryDiv}>
            <div className='childCatogaryDiv'>
              <NextLink href='/search?category=Women' passHref>
                <Link >
                  <Typography className='headerCategoriesText'>Women</Typography>
                </Link>
              </NextLink>
              <NextLink href='/search?category=Men' passHref>
                <Link >
                  <Typography className='headerCategoriesText'>Men</Typography>
                </Link>
              </NextLink>
              <NextLink href='/search?category=Kids' passHref>
                <Link >
                  <Typography className='headerCategoriesText'>Kids</Typography>
                </Link>
              </NextLink>
              <NextLink href='/search?category=Accessories' passHref>
                <Link >
                  <Typography className='headerCategoriesText'>Accessories</Typography>
                </Link>
              </NextLink>
              <NextLink href='/search?category=Sale' passHref>
                <Link >
                  <Typography style={{'color':'red'}} className='headerCategoriesText'>Sale</Typography>
                </Link>
              </NextLink>
              <NextLink href='/search?category=Hot Products' passHref>
                <Link >
                  <Typography style={{'color':'green'}} className='headerCategoriesText'>Hot Products</Typography>
                </Link>
              </NextLink>
            </div>
          </div> 
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.layOutFooter}>
          <div className='footerDivOne'>
            <h1>About Us</h1>
            <p>ANOS mission is to be world’s most customer centric company, to establish a place where customers can come to find different variety they might want to buy online. Anos caters best quality clothing, accessories, makeup and household items at most affordable price. We aim to provide the best possible online shopping experience to our customers. Shop at anos.pk and avail the best discounts & offers on your favorite products.</p>
          </div>
          <div style={{ 'color': 'white' }}>
            <h1>FOLLOW US</h1>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div style={{ 'color': 'white' }}>
            <h1>Payment Method</h1>
            <p>Cash on delivery</p>
            <p>Bank transfer</p> 
          </div>
        </footer>
        <div style={{ 'color': 'white', 'backgroundColor': 'black', 'textAlign': 'center', 'marginTop': '-20px' }}>
          <h4 >©ANOS COLLECTION. All Rights Reserved</h4>
        </div>

      </ThemeProvider>
    </div >
  );
}

export default Layout;
