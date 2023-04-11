import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../partials/Navbar';
import Footer from '../partials/Footer';

function HomeLayout() {
  return (
    <div className="grid grid-rows-7 h-full w-full relative font-inter">
      <div className="row-start-1 row-end-1 z-10">
        <Navbar bg />
      </div>
      <div className="row-start-1 row-end-3 lg:row-end-5 bg-hero-pattern bg-bottom bg-no-repeat bg-cover min-w-full min-h-full absolute z-0" />
      <div className=" bg-dark-blue row-start-2 row-end-7 flex flex-col h-full grow">
        <Outlet />
      </div>
      <div className="row-start-7 self-end">
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
