import React, { Fragment, useEffect } from 'react';
import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import arrowImg from '../../img/arrow.svg';
import { useSelector, useDispatch } from 'react-redux';
import { clickedCard, clearCard, offBtnItems } from '../store/magazinSlice';
import EmptyCart from './EmptyCart/EmptyCart';
import FinishOrder from './FinishOrder/FinishOrder';

const Cart = () => {
  const stateCard = useSelector((state) => state.getProduct.stateCard);
  const cardItems = useSelector((state) => state.getProduct.cardItems);
  const dispatch = useDispatch();
  const [sumItems, setSumItems] = React.useState(0);
  const [doneOrder, setDoneOrders] = React.useState(false);

  const cartBlock = [classes.cartBlock];
  const cart = [classes.cart];
  const done = [classes.done];

  if (stateCard) {
    cart.push(classes.activeCart);
    cartBlock.push(classes.active);
  }

  if (doneOrder) {
    done.push(classes.hidden);
  }

  function closeCart() {
    dispatch(clickedCard(false));
    dispatch(clearCard([]));
    dispatch(offBtnItems([]));
    setDoneOrders(false)
  }

  let sumInCart = function sumItems(cardItems) {
    const value = 0;
    const sum = cardItems.reduce((prevValue, currenValue) => prevValue + currenValue.price, value);
    return Math.round(sum);
  };

  function clickedOrderDone() {
    dispatch(offBtnItems(true))
    setDoneOrders(!doneOrder);

  }

  useEffect(() => {
    setSumItems(sumInCart(cardItems));
  }, [cardItems]);


  return (
    <div className={cartBlock.join(' ')} onClick={closeCart}>
      <div className={cart.join(' ')} onClick={(e) => e.stopPropagation()}>
        <h1>Корзина</h1>
        <div className={done.join(' ')}>
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
                <div className={classes.cartTotalPrice}>{Math.round(sumItems * 0.05)} грн. </div>
              </div>
              <button onClick={clickedOrderDone} className={classes.cartBtn}>
                Оформить заказ
                <img src={arrowImg} alt="arrowImg" />
              </button>
            </div>
          )}
          </div>
        {doneOrder && <FinishOrder closeCart={closeCart}/>}
      </div>
    </div>
  );
};

export default Cart;
