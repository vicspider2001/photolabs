import React from "react";
import "../styles/PhotoListItem.css";
import photos from "mocks/photos";




const PhotoListItem = ({ photo }) => {
  const { location, imageSource, username, profile } = photo;
  return (
    <div>
      <img className="photo-list__item" src={imageSource} alt="Photo" />
      <img src={profile} alt="Profile" />
      <div>
        <div>
          <span>{location.city},</span>
          <span>{location.country}</span>
        </div>
        <div>{username}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;
