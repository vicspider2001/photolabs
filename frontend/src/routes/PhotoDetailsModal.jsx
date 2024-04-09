import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
  console.log('Selected Photo:', selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Modal content goes here */}
    </div>
  )
};

export default PhotoDetailsModal;
