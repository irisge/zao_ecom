import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

import menu from '../assets/menu.svg';
import cart from '../assets/shopping-bag.svg';

function Navbar({ bg }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return { color: '#D98C4A' };
    }
    return null;
  };

  return (
    <nav className="flex justify-between items-center z-30 self-start w-full ">
      <a
        href="/"
        className={`${
          bg
            ? 'text-dark-brown font-extrabold text-base sm:text-2xl 2xl:text-[40px] whitespace-nowrap p-8'
            : 'text-yellow font-extrabold text-base sm:text-2xl 2xl:text-[40px] whitespace-nowrap p-8'
        }`}
      >
        <h1>ZAO SURF SCHOOL</h1>
      </a>
      <button
        type="button"
        className="lg:hidden"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <img src={menu} alt="Logo menu" className="p-8 lg:hidden" />
      </button>
      <div
        className={`${
          mobileNavOpen
            ? 'flex flex-col z-30 items-center bg-dark-blue w-screen absolute h-screen top-20 landscape:top-13 lg:hidden'
            : 'hidden lg:flex lg:justify-between lg:items-center lg:w-2/4 lg:py-8'
        }`}
      >
        <NavLink
          style={getActiveLinkStyle}
          to="/"
          onClick={() => setMobileNavOpen(false)}
          className="font-extrabold text-yellow text-lg 2xl:text-3xl py-8 lg:py-0"
        >
          Accueil
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/shop"
          onClick={() => setMobileNavOpen(false)}
          className="font-extrabold text-yellow text-lg 2xl:text-3xl py-8 lg:py-0"
        >
          Le Shop
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/ecole"
          onClick={() => setMobileNavOpen(false)}
          className="font-extrabold text-yellow text-lg 2xl:text-3xl py-8 lg:py-0"
        >
          L&apos;École
        </NavLink>
        <NavLink
          style={getActiveLinkStyle}
          to="/panier"
          onClick={() => setMobileNavOpen(false)}
          className="font-extrabold text-yellow text-lg 2xl:text-3xl lg:hidden py-8 lg:py-0"
        >
          Panier
        </NavLink>
      </div>
      <NavLink
        style={getActiveLinkStyle}
        to="/panier"
        className="hidden lg:block lg:pr-8"
      >
        <img src={cart} alt="panier" />
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  bg: PropTypes.bool.isRequired,
};

export default Navbar;
