import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems, addInCard, addFavoriteItems } from '../store/magazinSlice';

import classes from './ProductItems.module.css';
import ProductCard from '../ProductCard/ProductCard';
import MyLoader from '../Loader/Loader';

export default function ProductItems() {
  const items = useSelector(state => state.getProduct.items);
  const searchQuery = useSelector(state => state.getProduct.searchValue);
  const cardItems = useSelector(state => state.getProduct.cardItems);
  const addStateBtn = useSelector(state => state.getProduct.stateBtnProduct);
  const favoriteItems = useSelector(state => state.getProduct.favoriteItems);
  const isLoadingState = useSelector(state => state.getProduct.loading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  function search(items, searchQuery) {
    if (searchQuery.length === 0) {
      return items;
    } else {
      return searchQuery;
    }
  }

  function getCard(item) {
    if (cardItems.includes(item)) {
    } else {
      dispatch(addInCard(item));
    }
  }

  function addTofav(items) {
    if (favoriteItems.includes(items)) {
    } else {
      dispatch(addFavoriteItems(items));
    }
  }

  const empryArr = [1, 2, 3, 4];

  return (
    <div className={classes.productBlock}>
      {isLoadingState
        ? empryArr.map((el, ind) => <MyLoader key={ind} />)
        : search(items, searchQuery).map(item => (
            <ProductCard
              key={item.id}
              items={item}
              getCard={getCard}
              addStateBtn={addStateBtn}
              addTofav={addTofav}
            />
          ))}
    </div>
  );
}
