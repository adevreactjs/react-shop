import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchProduct } from '../store/magazinSlice';

import classes from './SearchItems.module.css';
import searchIcon from '../../img/search-icon.svg';

export default function SearchItems() {
  const items = useSelector((state) => state.getProduct.items);

  const dispatch = useDispatch();

  const [search, setSearch] = React.useState('');

  function searchValue(e) {
    const ser = items.filter((item) => item.title.toLowerCase().includes(e.target.value));
    dispatch(searchProduct(ser));
    setSearch(e.target.value);
  }

  return (
    <div className={classes.search}>
      <img src={searchIcon} alt="searchIcon" />
      <input id="search" type="text" onChange={searchValue} value={search} placeholder="Поиск..." />
    </div>
  );
}
