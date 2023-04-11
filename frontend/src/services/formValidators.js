const validateEmail = (email) => {
  const mail = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
  return mail.test(email);
};

export const validatePassword = (password) => {
  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[+-_?!@#$%^&*]).{8,}$/;
  return pass.test(password);
};

export const validateStreet = (street) => {
  const rue = /^\d{1,4}\s*(bis|ter)?\s+[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
  return rue.test(street);
};

export const validateZip = (zip) => {
  const postal = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  return postal.test(zip);
};

export const validateCity = (city) => {
  const cityName = /^[a-zA-ZÀ-ÿ]+([ \-'][a-zA-ZÀ-ÿ]+)*$/;
  return cityName.test(city);
};

export const validateDate = (date) => {
  const birth = /^(0?[1-9]|[1-2][0-9]|3[0-1])|(0?[1-9]|1[0-2])|\d{4}$/;
  return birth.test(date.trim());
};

export const validateName = (name) => {
  const lname = /^[a-zA-Z]{3,}$/;
  return lname.test(name);
};

export default validateEmail;
