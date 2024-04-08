import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);
   
   const handleClick = ({isFav, onClick}) => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <div className="photo-list__fav-icon ${isFav ? 'selected' : ''}`} onClick={onClick}" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;