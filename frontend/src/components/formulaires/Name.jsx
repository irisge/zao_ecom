import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateName } from '../../services/formValidators';

function Name({ firstname, setFirstname, lastname, setLastname }) {
  const [isValidName, setIsValidName] = useState(true);

  const handleChangeFirstname = (event) => {
    event.preventDefault();
    setFirstname(event.target.value);
    if (!validateName(firstname)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const handleChangeLastname = (event) => {
    event.preventDefault();
    setLastname(event.target.value);
    if (!validateName(lastname)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <label
        htmlFor="firstname"
        className="flex flex-col w-2/5 text-yellow text-md"
      >
        <span className="px-4">Prénom:</span>
        <input
          type="firstname"
          name="firstname"
          className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
          value={firstname}
          onChange={handleChangeFirstname}
        />
        {!isValidName && (
          <span className="text-red-400">
            Renseignez votre prénom et votre nom
          </span>
        )}
      </label>
      <label
        htmlFor="lastname"
        className="flex flex-col w-3/6 text-yellow text-md"
      >
        <span className="px-4">Nom:</span>
        <input
          type="lastname"
          name="lastname"
          className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
          value={lastname}
          onChange={handleChangeLastname}
        />
        {!isValidName && (
          <span className="text-red-400">
            Renseignez votre prénom et votre nom
          </span>
        )}
      </label>
    </div>
  );
}

Name.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  setFirstname: PropTypes.func,
  setLastname: PropTypes.func,
};

export default Name;
