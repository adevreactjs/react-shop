import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite/Favorite';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/react-shop' element={<Main />} />
        <Route path='/react-shop/favorite' element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
