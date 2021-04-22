import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import IconButton from '@material-ui/core/IconButton';

// scss-module
// import style from './ProductItem.module.scss';

//jss
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  itemAvailable: {
    backgroundColor: 'green',
    outline: '3px solid #dceb10',
    display: 'block',
    width: '20px',
    height: '20px',
  },
  itemNotAvailable: {
    backgroundColor: 'red',
    outline: '3px solid #dceb10',
    display: 'block',
    width: '20px',
    height: '20px',
  },
  item: {
    marginBottom: '5px',
    display: 'flex',

    // select sibling selector "p"
    '& p': {
      outline: x => (x > 5 ? '2px solid grey' : '2px solid red'),
    },
    // '&:hover': {
    //   backgroundColor: '#cdcfe6',
    // },
  },
  card: {
    padding: 5,
  },
});

const ProductsItem = ({ item }) => {
  // usual way to use jss styles
  // const jssClasses1 = useStyles();

  // way to use jss styles via conditions, f.e.
  //     so in this way condition goes to jss-useStyles fn, not in component
  const x = 7;
  const jssClasses = useStyles(x);

  return (
    <li className={jssClasses.item}>
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
      <CardActionArea className={jssClasses.card}>
        <Card>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Description: {item.descr}</p>
          <span
            className={
              item.available
                ? jssClasses.itemAvailable
                : jssClasses.itemNotAvailable
            }
          ></span>
        </Card>
      </CardActionArea>
    </li>
  );
};

export default ProductsItem;
