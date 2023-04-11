import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateZip } from '../../services/formValidators';

function Zip({ zip, setZip }) {
  const [isValidZip, setIsValidZip] = useState(true);

  const handleChangeZip = (event) => {
    event.preventDefault();
    setZip(event.target.value);
    if (!validateZip(event.target.value)) {
      setIsValidZip(false);
    } else {
      setIsValidZip(true);
    }
  };

  return (
    <label htmlFor="zip" className="flex flex-col w-full text-yellow text-md">
      <span className="px-6">Code postal:</span>
      <input
        type="number"
        name="zip"
        className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
        value={zip}
        onChange={handleChangeZip}
      />
      {!isValidZip && (
        <span className="text-red-400">Renseignez votre code postal</span>
      )}
    </label>
  );
}

Zip.propTypes = {
  zip: PropTypes.number,
  setZip: PropTypes.func,
};

export default Zip;
