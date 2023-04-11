import React, { useState, useEffect } from 'react';
import Email from './formulaires/Email';
import { useUserContext } from '../contexts/UserContext';
import Password from './formulaires/Password';

import fleche from '../assets/arrow-blue-right.svg';
import instance from '../services/serviceApi';
import SignUp from './SignUp';

function SignIn({ setSignInPopUnOn, setSignUpPopUpOn }) {
  const { setPassword, password, email, setEmail, setUserId, userId } =
    useUserContext();
  const [response, setResponse] = useState('');

  const data = { email, password };

  const handleSignIn = async (event) => {
    event.preventDefault();
    if (email && password) {
    }
  };

  const handleSignUp = (e) => {
    setSignInPopUnOn(false);
    setSignUpPopUpOn(true);
  };

  console.log(userId);

  return (
    <div className="fixed w-full h-full top-0 left-0 z-20 backdrop-blur-sm">
      <div className="z-30 block px-4 py-8 rounded-3xl left-1/2 top-1/2 max-w-full max-h-full fixed -translate-x-1/2 -translate-y-1/2 bg-dark-blue">
        <div className="flex flex-col items-center justify-evenly w-auto">
          <h1 className="text-yellow  self-start font-extrabold text-lg ">
            ZAO SURF SCHOOL
          </h1>
          <h3 className="text-orange font-extrabold text-base text-center">
            Connectez vous pour accéder à la fonctionnalité panier
          </h3>
          <p className="text-yellow font-normal text-md text-center">
            Vous n’avez pas encore de compte?
            <button type="button" className="text-white" onClick={handleSignUp}>
              {` M’inscrire`}
            </button>
          </p>
          <form className="flex flex-col w-full justify-evenly gap-4 items-center">
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            <button
              type="button"
              onClick={handleSignIn}
              className="bg-orange rounded-full flex justify-evenly items-center text-dark-blue font-bold text-xl lg:text-3xl px-4"
            >
              Me connecter
              <img
                src={fleche}
                alt="fleche vers la droite"
                className=" scale-50 lg:scale-100"
              />
            </button>
          </form>
          <button type="button">X</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
