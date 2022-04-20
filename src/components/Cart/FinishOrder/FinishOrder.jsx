import React from 'react';
import cl from './FinishOrder.module.css';
import box from '../../../img/finish.png';
import leftArrow from '../../../img/leftArrow.png';

const FinishOrder = ({closeCart}) => {
  return (
    <div className={cl.cartBlock}>
      <div className={cl.cart}>
        <img className={cl.listIcon} src={box} alt="box" />
        <h2>Заказ оформлен!</h2>
        <p>Ваш заказ #18 скоро будет передан курьерской доставке</p>
        <button onClick={closeCart} className={cl.btn}>
          <img src={leftArrow} alt="leftArrow" />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default FinishOrder;
