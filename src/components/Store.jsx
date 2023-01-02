import React from 'react';
import PropTypes from 'prop-types';

export default function Store({ data }) {
  const { name, products } = data;

  // iremos receber NOME da loja e produtos
  return (
    <div className="my-5">
      <span className="flex justify-between">
        <p className="uppercase">{name}</p>
        <p className="text-darkgrey">{`${products.length} produtos`}</p>

      </span>
      <div className="flex overflow-x-scroll overflow-x-visible">
        {
          products.map((product) => (
            <img src={product} alt="img" className="mx-3" />
          ))
        }
      </div>
    </div>
  );
}

Store.propTypes = {
  data: PropTypes.objectOf({
    name: PropTypes.string,
    products: PropTypes.string,
  }).isRequired,
};
