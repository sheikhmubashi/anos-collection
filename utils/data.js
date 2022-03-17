import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Women Stylsi Kurti',
      slug: 'women-stylsih-kurti',
      category: 'Shirts',
      image: '/images/shirt1.jpeg',
      price: 500,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Branded Kurti',
      slug: 'women-branded-kurti',
      category: 'Shirts',
      image: '/images/shirt2.jpeg',
      price: 700,
      brand: 'Anos Collection',
      rating: 2.5,
      numReviews: 20,
      countInStock: 10,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Kurti',
      slug: 'women-kurti',
      category: 'Shirts',
      image: '/images/shirt3.jpeg',
      price: 200,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 30,
      countInStock: 6,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsi Shirt',
      slug: 'women-stylsih-shirt',
      category: 'Shirts',
      image: '/images/shirt4.jpeg',
      price: 900,
      brand: 'Anos Collection',
      rating: 3.5,
      numReviews: 8,
      countInStock: 2,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsi Top Kurti',
      slug: 'women-stylsih-top-kurti',
      category: 'Shirts',
      image: '/images/shirt5.jpeg',
      price: 500,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsi Top Branded Kurti',
      slug: 'women-stylsih-top-branded-kurti',
      category: 'Shirts',
      image: '/images/shirt6.jpeg',
      price: 500,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 89,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsi Shirt Kurti',
      slug: 'women-stylsih-shirt-kurti',
      category: 'Shirts',
      image: '/images/shirt7.jpeg',
      price: 500,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 19,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsi Branded Shirt Kurti',
      slug: 'women-stylsih-branded-shirt-kurti',
      category: 'Shirts',
      image: '/images/shirt8.jpeg',
      price: 500,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 7,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
    {
      name: 'Women Stylsih Designing Kurti',
      slug: 'women-stylsih-designing-kurti',
      category: 'Shirts',
      image: '/images/shirt9.jpeg',
      price: 1000,
      brand: 'Anos Collection',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description:
        'Ladies Stylish Cotton Kurti – 20% OFF Branded Trendy Stylish',
    },
  ],
};

export default data;
