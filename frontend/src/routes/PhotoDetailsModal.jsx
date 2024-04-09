import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
//   console.log('Selected Photo:', selectedPhoto);
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//       {/* Modal content goes here */}
//     </div>
//   )
// };

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
  if (!selectedPhoto) {
    return null; // Return null if no selected photo
  }

  const { urls, similar_photos } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="selected-photo-container">
        <img className="selected-photo" src={urls.full} alt="Selected Photo" />
      </div>
      <div className="similar-photos-container">
        <h2>Similar Photos</h2>
        <div className="similar-photos-list">
          {Object.values(similar_photos).map((photo) => (
            <img key={photo.id} className="similar-photo" src={photo.urls.regular} alt="Similar Photo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
