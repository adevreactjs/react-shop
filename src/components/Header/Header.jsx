import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../../img/logo.svg';
import cart from '../../img/cart.svg';
import like from '../../img/like.svg';
import person from '../../img/person.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clickedCard } from '../store/magazinSlice';

export default function Header() {
  const [sumCart, setSumCart] = React.useState(0);
  const cardItems = useSelector(state => state.getProduct.cardItems);

  const dispath = useDispatch();

  function clickCard() {
    dispath(clickedCard(!false));
  }

  let sumInCart = function sumItems(cardItems) {
    const value = 0;
    const sum = cardItems.reduce((prevValue, currenValue) => prevValue + currenValue.price, value);
    return Math.round(sum);
  };

  React.useEffect(() => {
    setSumCart(sumInCart(cardItems));
  }, [cardItems]);

  return (
    <div>
      <div className={classes.header}>
        <Link to='/react-shop'>
          <div className={classes.logoBlock}>
            <img src={logo} alt='logo' />
            <div className={classes.logoLabel}>
              <h1>Magazin</h1>
              <h2>Лучший магазин</h2>
            </div>
          </div>
        </Link>
        <div className={classes.iconBlock}>
          <div onClick={clickCard} className={classes.cartBlock}>
            <img src={cart} alt='cart' />
            <div className={classes.price}>{sumCart} грн.</div>
          </div>
          <Link to='/react-shop/favorite'>
            <img className={classes.like} src={like} alt='like' />
          </Link>
          <img src={person} alt='person' />
        </div>
      </div>
    </div>
  );
}
