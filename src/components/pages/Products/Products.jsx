import { useState } from 'react';
import ProductList from '../../ProductList';

// const products = [
//   {
//     id: 1,
//     name: 'Phone',
//     price: 5000,
//     descr: 'It is a new one',
//     available: true,
//   },
//   {
//     id: 2,
//     name: 'TV',
//     price: 10000,
//     descr: 'It is a new',
//     available: false,
//   },
//   {
//     id: 3,
//     name: 'Fridge',
//     price: 12000,
//     descr: 'It is ...',
//     available: true,
//   },
// ];

const Products = () => {
  const [value, setValue] = useState([
    {
      id: 1,
      name: 'Phone',
      price: 5000,
      descr: 'It is a new one',
      available: true,
    },
  ]);
  return (
    <>
      {/* <ProductList products={products} /> */}
      <ProductList products={value} />
    </>
  );
};

export default Products;
