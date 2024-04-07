import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';
// import photos from "mocks/photos";


const PhotoListItem = ({ photo }) => {
  if (!photo) {
    return <div>No photo data available</div>;
  };
  
  const { location, urls, user } = photo;
 
  
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={urls.full} alt="Photo"/>
      <div>
        <img className="photo-list__user-profile" src={user.profile} alt="Profile"/>
        <div className="photo-list__user-location">
          <span>{location.city},</span>
          <span>{location.country}</span>
        </div>
        <div className="photo-list__user-info">{user.username}</div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
