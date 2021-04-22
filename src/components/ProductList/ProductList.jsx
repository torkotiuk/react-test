import ProductsItem from '../ProductItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: [0, 10, 10, 10],
  },
});

const ProductsList = ({ products }) => {
  const jssClasses = useStyles();

  return (
    <ul className={jssClasses.list}>
      {products.map(product => (
        // if we have id use:
        // <ProductsItem key={product.id} item={product} />

        // if we DO NOT have id use:
        <ProductsItem key={`${product.price}_${product.name}`} item={product} />
      ))}
    </ul>
  );
};

export default ProductsList;
