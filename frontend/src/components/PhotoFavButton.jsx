import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFav, displayAlert, onClick }) {
  const [selected, setSelected] = useState(isFav);

  const handleClick = () => {
    setSelected(!selected); // Toggle the selected state
    onClick(); // Call the onClick function passed from the parent
  };

  return (
    <div className={`photo-list__fav-icon ${selected ? 'selected' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={displayAlert} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

