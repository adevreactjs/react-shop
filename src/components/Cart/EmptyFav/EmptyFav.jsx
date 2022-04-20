import React from 'react';
import { Link } from 'react-router-dom';

import cl from './EmptyFav.module.css';
import smile from '../../../img/smile.svg';
import leftArrow from '../../../img/leftArrow.png';

const EmptyFav = () => {
  return (
    <div className={cl.smile}>
      <img className={cl.smileIcon} src={smile} alt="smile" />
      <h2>Закладок нет :(</h2>
      <p>Вы ничего не добавляли в закладки</p>
      <Link to='/'>
        <button className={cl.btn}>
          <img src={leftArrow} alt="leftArrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default EmptyFav;
