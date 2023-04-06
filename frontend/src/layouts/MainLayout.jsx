import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function MainLayout() {
  return (
    <div className="bg-dark-blue bg-no-repeat grid grid-rows-7bis font-inter grow relative">
      <div className="row-start-1 row-end-1 z-10">
        <Navbar />
      </div>
      <div className="row-start-2 row-end-3 bg-blob-pattern bg-bottom bg-no-repeat bg-cover justify-self-center absolute w-[95vw] h-[15vh] lg:h-[20vh] rounded-[30px]" />
      <div className=" row-start-2 row-end-7 relative w-[90vw] h-full self-center justify-self-center py-6 landscape:py-0 landscape:lg:py-6">
        <Outlet />
      </div>
      <div className=" row-start-7 row-end-7">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
