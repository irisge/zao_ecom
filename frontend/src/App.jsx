import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        {/* <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Catalogue nav="Shop" />} />
            <Route path="/panier" element={<ShoppingCart nav="Panier" />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
    // </UserContextProvider>
  );
}

export default App;
