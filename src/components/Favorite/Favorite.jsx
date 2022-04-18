import React from 'react'
import FavoriteItems from './FavoriteItems/FavoriteItems'
import { useSelector, useDispatch } from 'react-redux';


const Favorite = () => {

  const favItems = useSelector((state) => state.getProduct.favoriteItems);

  


  return (
    <div>
        <FavoriteItems favItems={favItems}/>
    </div>
  )
}

export default Favorite