import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import classes from './App.module.css';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ProductItems from './components/ProductItems/ProductItems';
import SearchItems from './components/SearchItems/SearchItems';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/magazin' element={<Main />} />
        <Route path='/magazin/favorite' element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
