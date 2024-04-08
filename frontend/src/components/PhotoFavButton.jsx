// PhotoFavButton.jsx
import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFav, onClick }) {
  return (
    <div className={`photo-list__fav-icon ${isFav ? 'selected' : ''}`} onClick={onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
