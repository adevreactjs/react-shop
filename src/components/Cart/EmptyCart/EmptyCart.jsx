import React from 'react';
import cl from './EmptyCart.module.css';
import box from '../../../img/box.png';
import leftArrow from '../../../img/leftArrow.png';

const EmptyCart = ({ closeCart }) => {
  return (
    <div className={cl.cartBlock}>
      <div className={cl.cart}>
        <img src={box} alt='box' />
        <h2>Корзина пустая</h2>
        <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
        <button onClick={closeCart} className={cl.btn}>
          <img src={leftArrow} alt='leftArrow' />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
