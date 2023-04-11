import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContextProvider } from './contexts/UserContext';

import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Catalogue nav="Shop" />} />
            {/* <Route path="/panier" element={<ShoppingCart nav="Panier" />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
