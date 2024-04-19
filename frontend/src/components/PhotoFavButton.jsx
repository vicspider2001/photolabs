import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFav, displayAlert, onClick }) {
  
  const handleClick = () => {
    onClick(); // Call the onClick function passed from the parent
  };

  return (
    <div className={`photo-list__fav-icon ${isFav ? 'selected' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon  selected = {isFav} displayAlert = {displayAlert}  />
      </div>
    </div>
  );
}

export default PhotoFavButton;