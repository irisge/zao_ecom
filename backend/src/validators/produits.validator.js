const Joi = require('joi');

const validateProduct = (product, createMod) => {
  const mode = createMod ? 'required' : 'optional';

  const result = Joi.object({
    title: Joi.string().presence(mode),
    description: Joi.string().presence(mode),
    price: Joi.number().precision(2).presence(mode),
    picture: Joi.string().presence(mode),
  })
    .required()
    // .min(1)
    .validate(product, { abortEarly: false }).error;

  if (result) {
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));

    return { errorCount: result.details.length, errorMessages };
  }

  return result;
};

module.exports = { validateProduct };
