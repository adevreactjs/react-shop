import React from 'react';
import classes from './CartItem.module.css';
import closeBtn from '../../../img/closeBtn.svg';
import { useDispatch } from 'react-redux';
import { deletedCardItems } from '../../store/magazinSlice';
import { addBtnState } from '../../store/magazinSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function deleteItems(id) {
    dispatch(addBtnState(id));
    dispatch(deletedCardItems(id));
  }

  return (
    <div className={classes.cart}>
      <img src={item.image} alt='imgItem' />
      <div className={classes.cartDescription}>
        <div className={classes.cartTitle}>{item.title}</div>
        <div className={classes.cartPrice}>{item.price} грн.</div>
      </div>
      <img
        id={classes.closeBtn}
        onClick={() => deleteItems(item.id)}
        src={closeBtn}
        alt='closeBtn'
      />
    </div>
  );
};

export default CartItem;
