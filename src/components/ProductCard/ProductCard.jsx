import React, { useEffect } from 'react';
import classes from './ProductCard.module.css';
import cardLike from '../../img/fav.svg';
import addBtn from '../../img/addBtn.svg';
import clickBtn from '../../img/clickAdd.svg';
import offLike from '../../img/offLike.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addBtnState, offBtnItems } from '../store/magazinSlice';

export default function ({ items, getCard, addStateBtn, addTofav }) {
  const [add, setAddBtn] = React.useState(false);
  const [likeBtn, setOffBtn] = React.useState(false);
  const orderState = useSelector(state => state.getProduct.stateBtnOrder);

  const dispatch = useDispatch();

  function addClick() {
    setAddBtn(!add);
    dispatch(addBtnState(true));
    getCard(items);
  }

  function offLikeClick() {
    addTofav(items);
    setOffBtn(!likeBtn);
  }

  useEffect(() => {
    if (addStateBtn === items.id) {
      setAddBtn(false);
    }
  }, [addStateBtn]);

  useEffect(() => {
    if (orderState) {
      setAddBtn(false);
    }
  }, [orderState]);

  return (
    <>
      {
        <div className={classes.cardBlock}>
          <div className={classes.cardImg}>
            <img src={items.image} alt='imgProduct' />
            <button onClick={offLikeClick} className={classes.likeBtn}>
              {likeBtn ? (
                <img src={cardLike} alt='cardLike' />
              ) : (
                <img src={offLike} alt='cardLike' />
              )}
            </button>
          </div>
          <div className={classes.cardTitle}>{items.title}</div>
          <div className={classes.price}>
            <div>
              <div className={classes.priceLabel}>Цена:</div>
              <div className={classes.priceCount}>{Math.round(items.price)} грн.</div>
            </div>
            <button onClick={addClick} className={classes.addBtn}>
              {add ? <img src={clickBtn} alt='addBtn' /> : <img src={addBtn} alt='clickBtn' />}
            </button>
          </div>
        </div>
      }
    </>
  );
}
