import React, { useState } from 'react';
import './NewItem.styles.scss';

import LoadProductInsideModal from '../products/LoadProductInsideModal';

const NewItem = ({ product, name }) => {
  /* Modal */
  const [modalStatus, setIsOpen] = useState(false);

  /* Handle product click */
  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  return (
    <>
      <div className="new-product" onClick={toggleModal}>
        <p>{product.name}</p>
        <div className="new-product__img">
          <img src={`/uploads/${name.toLowerCase()}/images/products/${product.photo}`} alt="" />
        </div>
        <p>
          EUR: {product.price} - {product.unit}
        </p>
      </div>
      {modalStatus && (
        <LoadProductInsideModal
          modalStatus={modalStatus}
          toggleModal={toggleModal}
          product={product}
          farmerName={name}
        />
      )}
    </>
  );
};

export default NewItem;
