import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useUserContext } from '../contexts/UserContext';
import SignIn from './SignIn';

import grille from '../assets/view-grid.svg';
import panier from '../assets/shopping-bag-wo-circle.png';
import SignUp from './SignUp';

function Card({ produits }) {
  const [signInPopUpOn, setSignInPopUpOn] = useState(false);
  const [signUpPopUpOn, setSignUpPopUpOn] = useState(false);
  const { userId } = useUserContext();
  const handleLoginAndBag = async (e) => {
    if (!userId) {
      return setSignInPopUpOn(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full md:grid lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {produits.map((p) => (
        <div
          className="bg-light-blue rounded-2xl w-[275px] h-[300px] lg:w-[300px] lg:h-[350px] 2xl:w-[450px] 2xl:h-[500px] place-self-center flex flex-col items-center justify-between px-4 py-4 text-center"
          key={p.id}
        >
          <div className="flex w-full justify-between">
            <img src={grille} alt="quatre carrés formant une grille" />
            <button type="button" onClick={handleLoginAndBag}>
              <img src={panier} alt="panier de shopping" name={p.id} />
            </button>
          </div>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${p.picture}`}
            alt={p.title}
          />
          <p className="font-regular text-xl lg:text-2xl text-dark-blue">
            {p.title}
          </p>
          <p className="font-bold text-xl lg:text-2xl text-dark-blue">
            {p.price}€
          </p>
        </div>
      ))}
      {signInPopUpOn && (
        <SignIn
          signInPopUpOn={signInPopUpOn}
          setSignInPopUnOn={setSignInPopUpOn}
          setSignUpPopUpOn={setSignUpPopUpOn}
        />
      )}
      {signUpPopUpOn && <SignUp />}
    </div>
  );
}

Card.propTypes = {
  produits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // eslint-disable-next-line comma-dangle
    }),
  ).isRequired,
};

export default Card;
