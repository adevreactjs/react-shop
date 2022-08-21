import React from 'react';
import Header from '../../Header/Header';
import classes from './FavoriteItems.module.css';
import { useDispatch } from 'react-redux';
import { filtFavoriteItems } from '../../store/magazinSlice';
import FavItem from './FavItem';
import Cart from '../../Cart/Cart';
import EmptyFav from '../../Cart/EmptyFav/EmptyFav';

const FavoriteItems = ({ favItems }) => {
  const dispatch = useDispatch();

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
        {favItems.length === 0 ? (
          <EmptyFav />
        ) : (
          favItems.map(obj => <FavItem key={obj.id} items={obj} removeFavItems={removeFavItem} />)
        )}
      </div>
      <Cart />
    </div>
  );
};

export default FavoriteItems;
