import React, { useEffect } from 'react';
import classes from './FavItem.module.css';
import cardLike from '../../../img/fav.svg';
import addBtn from '../../../img/addBtn.svg';
import clickBtn from '../../../img/clickAdd.svg';
import offLike from '../../../img/offLike.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addInCard } from '../../store/magazinSlice';

export default function FavItem({ items, removeFavItems }) {
  const [add, setAddBtn] = React.useState(false);
  const [likeBtn, setOffBtn] = React.useState(true);

  const favoriteItems = useSelector((state) => state.getProduct.favoriteItems);
  const cardItems = useSelector((state) => state.getProduct.cardItems);

  const dispatch = useDispatch();

  function addClick() {
    setAddBtn(!add);
    addToCard()
    // checkItemInCard()
  }

  function offLikeClick() {
    removeFavItems(items);
    setOffBtn(!likeBtn);
  }

  function addToCard() {
    if (!cardItems.includes(items)) {
      dispatch(addInCard(items));
    }
  }
  

  function checkItemInCard() {
    if(cardItems.includes(items)) {
      setAddBtn(true);
    } else {
      setAddBtn(false);

    }
  }

  useEffect(() => {
    checkItemInCard()
    
  }, [cardItems])
  

  return (
    <>
      {
        <div className={classes.cardBlock}>
          <div className={classes.cardImg}>
            <img src={items.image} alt="imgProduct" />
            <button onClick={offLikeClick} className={classes.likeBtn}>
              {likeBtn ? (
                <img src={cardLike} alt="cardLike" />
              ) : (
                <img src={offLike} alt="cardLike" />
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
              {add ? <img src={clickBtn} alt="addBtn" /> : <img src={addBtn} alt="clickBtn" />}
            </button>
          </div>
        </div>
      }
    </>
  );
}
