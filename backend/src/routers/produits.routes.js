const express = require('express');

const {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require('../controllers/produits.controller');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/', createOneProduct);
router.put('/:id', updateOneProduct);
router.delete('/:id', deleteOneProduct);

module.exports = router;
