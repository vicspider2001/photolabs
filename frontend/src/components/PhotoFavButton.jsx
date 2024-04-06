import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.css';

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);

   // Define handleClick as a memoized function using useCallback
   const handleClick = useCallback(() => {
    setSelected(prevSelected => !prevSelected);
  }, []); 

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;