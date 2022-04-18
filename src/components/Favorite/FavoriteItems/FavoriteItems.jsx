import React from 'react';
import Header from '../../Header/Header';
import ProductCard from '../../ProductCard/ProductCard';
import classes from './FavoriteItems.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filtFavoriteItems } from '../../store/magazinSlice';
import FavItem from './FavItem';
import Cart from '../../Cart/Cart';



const FavoriteItems = ({favItems}) => {

  const items = useSelector((state) => state.getProduct.items);
  const dispatch = useDispatch()

  function removeFavItem(item) {
    if (favItems.includes(item)) {
     dispatch(filtFavoriteItems(item.id));
    }
 }


  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.line}></div>
      <div className={classes.title}>Мои закладки</div>
      <div className={classes.container}>
        {
          favItems.map((obj) => <FavItem key={obj.id} items={obj} removeFavItems={removeFavItem}/>)
        }
      </div>
      <Cart/>
    </div>
  );
};

export default FavoriteItems;
