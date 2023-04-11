import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { validateDate } from '../../services/formValidators';

function Birthdate({
  birthdateDay,
  birthdateMonth,
  birthdateYear,
  setBirthdateDay,
  setBirthdateMonth,
  setBirthdateYear,
}) {
  const [isValidDate, setIsValidDate] = useState(true);

  const handleChangeDay = (event) => {
    event.preventDefault();
    setBirthdateDay(event.target.value);
    if (!validateDate(event.target.value)) {
      setIsValidDate(false);
      console.log(birthdateDay);
    } else {
      setIsValidDate(true);
    }
  };

  const handleChangeMonth = (event) => {
    event.preventDefault();
    setBirthdateMonth(event.target.value);
    if (!validateDate(event.target.value)) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
  };

  const handleChangeYear = (event) => {
    event.preventDefault();
    setBirthdateYear(event.target.value);
    if (!validateDate(event.target.value)) {
      setIsValidDate(false);
    } else {
      setIsValidDate(true);
    }
  };

  return (
    <div className="flex w-full justify-between">
      <label
        htmlFor="birthdateDay"
        className="flex flex-col w-1/4 text-yellow text-md"
      >
        <span className="px-4">Jour:</span>
        <input
          type="text"
          name="birthdateDay"
          pattern="^(0?[1-9]|[12]\d|3[01])$"
          placeholder="JJ"
          className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
          value={birthdateDay}
          onChange={handleChangeDay}
        />
        {!isValidDate && (
          <span className="text-red-400">
            Renseignez votre date de naissance au format JJ/MM/AAAA
          </span>
        )}
      </label>
      <label
        htmlFor="birthdateMonth"
        className="flex flex-col w-1/4 text-yellow text-md"
      >
        <span className="px-4">Mois:</span>
        <input
          type="birthdateMonth"
          name="birthdateMonth"
          placeholder="MM"
          className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
          value={birthdateMonth}
          onChange={handleChangeMonth}
        />
        {!isValidDate && (
          <span className="text-red-400">
            Renseignez votre date de naissance au format JJ/MM/AAAA
          </span>
        )}
      </label>
      <label
        htmlFor="birthdateYear"
        className="flex flex-col w-2/5 text-yellow text-md"
      >
        <span className="px-4">Année:</span>
        <input
          type="birthdateYear"
          name="birthdateYear"
          placeholder="AAAA"
          className="rounded-full text-dark-blue bg-light-blue py-2 px-6"
          value={birthdateYear}
          onChange={handleChangeYear}
        />
        {!isValidDate && (
          <span className="text-red-400">
            Renseignez votre date de naissance au format JJ/MM/AAAA
          </span>
        )}
      </label>
    </div>
  );
}

Birthdate.propTypes = {
  birthdateDay: PropTypes.number,
  birthdateMonth: PropTypes.number,
  birthdateYear: PropTypes.number,
  setBirthdateDay: PropTypes.func,
  setBirthdateMonth: PropTypes.func,
  setBirthdateYear: PropTypes.func,
};

export default Birthdate;
