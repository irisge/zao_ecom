const db = require('./db');

const findAllProducts = async () => {
  try {
    const [produits] = await db.query('SELECT * FROM `product`');
    return produits;
  } catch (e) {
    console.log(e);
  }
};

const findOneProduct = async (id) => {
  try {
    const [produit] = await db.query('SELECT * FROM `product` WHERE id = ?', [
      id,
    ]);
    return produit;
  } catch (e) {
    console.log(e);
  }
};

const addOneProduct = async (product) => {
  try {
    const { title, description, price, picture } = product;
    const [produit] = await db.query(
      'INSERT INTO `product` (title, description, price, picture) VALUES (?, ?, ?, ?)',
      [title, description, price, picture],
    );
    return { id: produit.insertId };
  } catch (e) {
    console.log(e);
  }
};

const modifyOneProduct = async (product) => {
  try {
    const { title, description, price, picture, id } = product;
    const produit = await db.query(
      'UPDATE `product` SET title = ?, description = ?, price = ?, picture = ? WHERE id=?',
      [title, description, price, picture, id],
    );
    return produit;
  } catch (e) {
    console.log(e);
  }
};

const eraseOneProduct = async (id) => {
  try {
    const produit = await db.query('DELETE FROM `product` WHERE id= ?', [id]);
    return produit;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  findAllProducts,
  findOneProduct,
  addOneProduct,
  modifyOneProduct,
  eraseOneProduct,
};
