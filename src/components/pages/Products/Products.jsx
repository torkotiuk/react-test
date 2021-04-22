import ProductList from '../../ProductList';

const products = [
  {
    id: 1,
    name: 'Phone',
    price: 5000,
    descr: 'It is a new one',
    available: true,
  },
  {
    id: 2,
    name: 'TV',
    price: 10000,
    descr: 'It is a new',
    available: false,
  },
  {
    id: 3,
    name: 'Fridge',
    price: 12000,
    descr: 'It is ...',
    available: true,
  },
];

const Products = () => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Products;
