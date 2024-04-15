
import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, onClick, selected, setSelected }) => {
  
  const handleClick = () => {
    onClick();
    
  };
  const handleFill = () => {
    selected()
  }

  return (
    <div className={`fav-badge ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <FavIcon displayAlert={isFavPhotoExist} selected={handleFill} setSelected={setSelected} />
    </div>
  );
};

export default FavBadge;
