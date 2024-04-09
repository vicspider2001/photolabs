import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ photo, toggleFav, favPhotos, setDisplayModal }) => {
  if (!photo) {
    return <div>No photo data available</div>;
  };
  

  const { id, location, urls, user } = photo;
  const isFav = favPhotos.includes(id);
 
  const handleClick = () => {
    toggleFav(id);
  };
  const handleModalClick = () => {
    setDisplayModal(photo); // Set displayModal and pass selected photo data
  };

  return (
    <div className="photo-list__item" onClick={handleModalClick}>
      <PhotoFavButton isFav={isFav} onClick={handleClick}/>
      <img className="photo-list__image" src={urls.full} alt="Photo"/>
      <div>
        
        <div className="photo-list__user-details">
          <span><img className="photo-list__user-profile" src={user.profile} alt="Profile"/></span>
          <div className="photo-list__user-info">
            {user.username}
            <div className="photo-list__user-location">
              <span>{location.city},</span>
              <span>{location.country}</span>
            </div>
          </div>
          
          
        </div>
        
        
      </div>
      
    </div>
  );
};

export default PhotoListItem;
