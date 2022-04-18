import React, { useEffect } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import arrowImg from '../../img/arrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { clickedCard } from '../store/magazinSlice';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = () => {
  const stateCard = useSelector((state) => state.getProduct.stateCard);
  const cardItems = useSelector((state) => state.getProduct.cardItems);
  const dispatch = useDispatch();
  const [sumItems, setSumItems] = React.useState(0)

  const cartBlock = [classes.cartBlock];
  const cart = [classes.cart];

  if (stateCard) {
    cart.push(classes.activeCart);
    cartBlock.push(classes.active);
  }
  function closeCart() {
    dispatch(clickedCard(false));
  }
  let sumInCart = function sumItems(cardItems) {
    const value = 0
    const sum = cardItems.reduce((prevValue, currenValue) =>prevValue + currenValue.price, value)
    return Math.round(sum)
  }

  useEffect(() => {
    setSumItems(sumInCart(cardItems))
  }, [cardItems])
  

  return (
    <div className={cartBlock.join(' ')} onClick={closeCart}>
      <div className={cart.join(' ')} onClick={(e) => e.stopPropagation()}>
        <h1>Корзина</h1>
        {cardItems.length === 0 ? (
          <EmptyCart closeCart={closeCart} />
        ) : (
          <div className={classes.cartItems}>
            <div className={classes.cartItem}>
            {cardItems.map((el) => (
              <CartItem key={el.id} item={el} />
            ))}
            </div>
            <div className={classes.cartTotal}>
              <div className={classes.cartTotalTitle}>Итого: </div>
              <div className={classes.cartTotalLine}></div>
              <div className={classes.cartTotalPrice}>{sumItems} грн. </div>
            </div>
            <div className={classes.cartTotal}>
              <div className={classes.cartTotalTitle}>Налог 5%: </div>
              <div className={classes.cartTotalLine}></div>
              <div className={classes.cartTotalPrice}>{Math.round(sumItems*0.05)} грн. </div>
            </div>
            <button className={classes.cartBtn}>
              Оформить заказ
              <img src={arrowImg} alt="arrowImg" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
