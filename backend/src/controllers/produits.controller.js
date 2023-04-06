const {
  findAllProducts,
  findOneProduct,
  addOneProduct,
  modifyOneProduct,
  eraseOneProduct,
} = require('../models/produits.model');

const { validateProduct } = require('../validators/produits.validator');

const getAllProducts = async (req, res) => {
  try {
    const produits = await findAllProducts();
    res.send(produits);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const produitId = parseInt(req.params.id, 10);

    if (isNaN(produitId)) throw new Error();
    const [produit] = await findOneProduct(produitId);
    res.send(produit);
  } catch (e) {
    res.sendStatus(500);
    console.log(e);
  }
};

const createOneProduct = async (req, res) => {
  try {
    const errors = validateProduct(req.body);

    if (errors) throw res.status(401).send(errors);
    const produit = await addOneProduct({ ...req.body });
    res.status(201).send(produit);
  } catch (e) {
    res.sendStatus(500);

    console.log(e);
  }
};

const updateOneProduct = async (req, res) => {
  try {
    const product = {
      id: parseInt(req.params.id, 10),
      title: req.body.title,
      description: req.body.description,
      price: parseInt(req.body.price, 10),
      picture: req.files?.photo,
    };
    console.log(product);
    const produit = await modifyOneProduct(product);
    res.status(201).send(produit);
  } catch (e) {
    console.log(e);
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const produit = await eraseOneProduct(id);
    res.sendStatus(200);
  } catch (e) {}
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
