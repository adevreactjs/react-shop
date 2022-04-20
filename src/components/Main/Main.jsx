import React from 'react';
import classes from './Main.module.css';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import ProductItems from '../ProductItems/ProductItems';
import SearchItems from '../SearchItems/SearchItems';
import SortList from '../SortList/SortList';
import { useSelector, useDispatch } from 'react-redux';
import { sortPrice } from '../store/magazinSlice';

const Main = () => {
  const items = useSelector((state) => state.getProduct.items);
  const dispatch = useDispatch();

  const [selectedSort, setSelectedSort] = React.useState('');

  function sortCardItems(e) {
    setSelectedSort(e);
    console.log(e);

    switch (e) {
      case 'hightPrice':
        const sortHightPrice = [...items].sort((a, b) => a.price - b.price);
        dispatch(sortPrice(sortHightPrice));
        break;

      case 'lowPrice':
        const sortLowPrice = [...items].sort((a, b) => b.price - a.price);
        dispatch(sortPrice(sortLowPrice));
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.line}></div>
        <div className={classes.container}>
          <div className={classes.filterBlock}>
            <SearchItems />
            <SortList
              value={selectedSort}
              onChange={sortCardItems}
              defaultValue="Сортировка по"
              option={[
                { value: 'hightPrice', name: 'Возростанию цены' },
                { value: 'lowPrice', name: 'Убыванию цены' },
              ]}
            />
          </div>
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
