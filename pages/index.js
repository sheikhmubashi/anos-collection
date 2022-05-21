/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Link } from '@material-ui/core';
// import { Grid, Typography } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Image from 'next/image'
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useContext } from 'react';
// import { Store } from '../utils/Store';
// import ProductItem from '../components/ProductItem';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';
import bannerWomens from '../public/images/bannerWomens.jpg';
import bannerMans from '../public/images/bannerMans.jpg';
import bannerKids from '../public/images/bannerKids.jpg';
import bannerGirls from '../public/images/bannerGirls.jpg';
import mainBanner from '../public/images/mainBanner.jpg';



export default function Home(props) {
  const classes = useStyles();
  // const router = useRouter();
  // const { state, dispatch } = useContext(Store);
  // const { topRatedProducts, featuredProducts } = props;
  const { featuredProducts } = props;


  // const addToCartHandler = async (product) => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${product._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert('Sorry. Product is out of stock');
  //     return;
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  //   router.push('/cart');
  // };
  return (
    <Layout>
      <Carousel height={"500px"} className={classes.mt1} animation="slide">
        {featuredProducts.map((product) => (
          // <NextLink 
          //   key={product._id}
          //   href={`/product/${product.slug}`}
          //   passHref
          // >
          //   <Link>
          //     <img
          //     height={"500"}
          //       src={product.featuredImage}
          //       alt={product.name}
          //       className={classes.featuredImage}
          //     ></img>
          //   </Link>
          // </NextLink>
          <Image
            key={product._id}
            // height={"500"}
            src={mainBanner}
            // src={bannerWomens}
            alt={product.name}
            className={classes.featuredImage}
          ></Image>
        ))}
      </Carousel>
      <Typography variant="h1">WOMEN</Typography>
      <div>
        <NextLink href="/search?category=Womens" passHref>
          <Link>
            {/* <Typography className={classes.brand}>Anos Collection</Typography> */}
            <Typography className={classes.brand}>
              <Image src={bannerWomens} alt="banner" />
            </Typography>
          </Link>
        </NextLink>
      </div>
      {/* <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid> */}
      <Typography variant="h1">MEN</Typography>
      <div>
        <NextLink href="/search?category=Mans" passHref>
          <Link>
            {/* <Typography className={classes.brand}>Anos Collection</Typography> */}
            <Typography className={classes.brand}>
              <Image src={bannerMans} alt="banner" />
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Typography variant="h1">KIDS</Typography>
      <div>
        <NextLink href="/search?category=Kids" passHref>
          <Link>
            {/* <Typography className={classes.brand}>Anos Collection</Typography> */}
            <Typography className={classes.brand}>
              <Image src={bannerKids} alt="banner" />
            </Typography>
          </Link>
        </NextLink>
      </div>
      <Typography variant="h1">SALE</Typography>
      <div>
        <NextLink href="/search?category=Sale" passHref>
          <Link>
            {/* <Typography className={classes.brand}>Anos Collection</Typography> */}
            <Typography className={classes.brand}>
              <Image src={bannerGirls} alt="banner" />
            </Typography>
          </Link>
        </NextLink>
      </div>

    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}