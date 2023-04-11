import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import instance from '../services/serviceApi';

import Card from '../components/Card';

function Catalogue({ nav }) {
  const [produits, setProduits] = useState([]);
  useEffect(() => {
    instance.get('api/produits').then((res) => setProduits(res.data));
  }, []);

  console.log(produits);
  return (
    <div className="flex flex-col w-full ">
      <h2 className="font-inter font-bold text-xl text-black">
        {`Accueil / ${nav}`}
      </h2>
      <Card produits={produits} />
    </div>
  );
}

Catalogue.propTypes = {
  nav: PropTypes.string.isRequired,
};

export default Catalogue;
