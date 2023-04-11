import React, { useState } from 'react';

import { useUserContext } from '../contexts/UserContext';

import Email from './formulaires/Email';
import Password from './formulaires/Password';
import Name from './formulaires/Name';
import Street from './formulaires/Street';
import Zip from './formulaires/Zip';
import City from './formulaires/City';
import Birthdate from './formulaires/Birthdate';

import fleche from '../assets/arrow-blue-right.svg';
import instance from '../services/serviceApi';

function SignUp({ signInPopUpOn, setSignInPopUpOn }) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState(null);
  const [city, setCity] = useState('');
  const [birthdateDay, setBirthdateDay] = useState(null);
  const [birthdateMonth, setBirthdateMonth] = useState(null);
  const [birthdateYear, setBirthdateYear] = useState(null);
  const { email, password, setPassword, setEmail } = useUserContext();

  const handleSignUp = (e) => {};

  return (
    <div className="fixed w-full h-full top-0 left-0 z-20 backdrop-blur-sm">
      <div className="z-30 flex rounded-3xl left-1/2 top-1/2 w-[90%] max-w-xl max-h-full fixed -translate-x-1/2 -translate-y-1/2 bg-dark-blue overflow-auto landscape:overflow-y-auto">
        <div className="px-4 py-8 flex flex-col items-center justify-around w-full min-h-full ">
          <div className="flex w-full h-full justify-between">
            <h1 className="text-yellow  self-start font-extrabold text-lg ">
              ZAO SURF SCHOOL
            </h1>
            <button type="button" className="text-white font-extrabold">
              X
            </button>
          </div>
          <h3 className="text-orange font-extrabold text-base text-center">
            Bienvenue à la Zao Surf School
          </h3>
          <form className="flex flex-col w-full justify-evenly gap-4 items-center">
            <Email email={email} setEmail={setEmail} />
            <Password password={password} setPassword={setPassword} />
            <Name
              firstname={firstname}
              lastname={lastname}
              setFirstname={setFirstname}
              setLastname={setLastname}
            />
            <Street street={street} setStreet={setStreet} />
            <Zip zip={zip} setZip={setZip} />
            <City city={city} setCity={setCity} />
            <Birthdate
              birthdateDay={birthdateDay}
              birthdateMonth={birthdateMonth}
              birthdateYear={birthdateYear}
              setBirthdateDay={setBirthdateDay}
              setBirthdateMonth={setBirthdateMonth}
              setBirthdateYear={setBirthdateYear}
            />
            <button
              type="button"
              onClick={handleSignUp}
              className="bg-orange rounded-full flex justify-evenly items-center text-dark-blue font-bold text-lg px-4 w-auto"
            >
              M&apos;inscrire
              <img
                src={fleche}
                alt="fleche vers la droite"
                className=" scale-50 lg:scale-75"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
