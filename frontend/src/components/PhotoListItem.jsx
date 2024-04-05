import React from "react";
import "../styles/PhotoListItem.css";
// import photos from "mocks/photos";


const PhotoListItem = ({ photo }) => {
  const { location, imageSource, username, profile } = photo;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="Photo"/>
      <div>
        <img className="photo-list__user-profile" src={profile} alt="Profile"/>
        <div className="photo-list__user-location">
          <span>{location.city},</span>
          <span>{location.country}</span>
        </div>
        <div className="photo-list__user-info">{username}</div>
      </div>
      
    </div>
  );
};

export default PhotoListItem;
