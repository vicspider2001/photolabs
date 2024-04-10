import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto, toggleFav, photos}) => {
 console.log("SelectedPhotos", selectedPhoto)
  const { urls, similar_photos, user, location } = selectedPhoto;
  const [ID, setID] = useState('');

  const handleModalClick = () => {
    {photos.map((modalPhotos) => {
      toggleFav(modalPhotos.id);
    })}
    
  };
  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeDisplayModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div><PhotoFavButton onClick={() => handleModalClick}/></div>
        <img className="photo-details-modal__image" src={urls.full} alt="Selected Photo" />
        <div className='photo-details-modal__photographer-details'>
          {user && (
            <>
              <img src={user.profile} alt="Photographer" className="photo-details-modal__photographer-profile" />
              <div className='photo-details-modal__photographer-info'>
                {user.name}
                <div className='photo-details-modal__photographer-location'>
                <span>{location.city},</span>
                <span>{location.country}</span>
                </div>
              </div>
            </>
          )}
        </div>
        
      </div>
      <div className="photo-details-modal__images">
        <div className='photo-details-modal__header'>
          Similar Photos
          
        </div>
        <PhotoList photos={Object.values(similar_photos)} />
          
      </div>
        
    </div>
    
  );
};

export default PhotoDetailsModal;