import React from 'react';
import classes from './Main.module.css';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import ProductItems from '../ProductItems/ProductItems';
import SearchItems from '../SearchItems/SearchItems';

const Main = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.line}></div>
        <div className={classes.container}>
          <SearchItems />
        </div>
        <div className={classes.container}>
          <ProductItems />
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Main;
