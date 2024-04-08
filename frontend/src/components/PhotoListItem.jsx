import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
// import photos from "mocks/photos";


const PhotoListItem = ({ photo, toggleFav, favPhotos }) => {
  if (!photo) {
    return <div>No photo data available</div>;
  };
  
  const { id, location, urls, user } = photo;
  const isFav = favPhotos.includes(id);
 
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton isFav={isFav} onClick={() =>toggleFav(id)}/>
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
