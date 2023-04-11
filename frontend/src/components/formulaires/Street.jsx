import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateStreet } from '../../services/formValidators';

function Street({ street, setStreet }) {
  const [isValidStreet, setIsValidStreet] = useState(true);

  const handleChangeStreet = (event) => {
    event.preventDefault();
    setStreet(event.target.value);
    if (!validateStreet(street)) {
      setIsValidStreet(false);
    } else {
      setIsValidStreet(true);
    }
  };

  return (
    <label htmlFor="street" className="flex flex-col w-full text-yellow text-md">
      <span className="px-6">Numéro et nom de rue:</span>
      <input
        type="street"
        name="street"
        className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
        value={street}
        onChange={handleChangeStreet}
      />
      {!isValidStreet && (
        <span className="text-red-400">
          Renseignez votre numéro et nom de rue
        </span>
      )}
    </label>
  );
}

Street.propTypes = {
  street: PropTypes.string,
  setStreet: PropTypes.func,
};

export default Street;
