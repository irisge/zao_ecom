import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateCity } from '../../services/formValidators';

function City({ city, setCity }) {
  const [isValidCity, setIsValidCity] = useState(true);

  const handleChangeCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
    if (!validateCity(city)) {
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }
  };

  return (
    <label htmlFor="city" className="flex flex-col w-full text-yellow text-md">
      <span className="px-6">Ville:</span>
      <input
        type="text"
        name="city"
        className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
        value={city}
        onChange={handleChangeCity}
      />
      {!isValidCity && (
        <span className="text-red-400">
          Renseignez votre ville
        </span>
      )}
    </label>
  );
}

City.propTypes = {
  city: PropTypes.string,
  setCity: PropTypes.func,
};

export default City;
