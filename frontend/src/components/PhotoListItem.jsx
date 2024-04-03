import React from "react";
// import "../styles/PhotoListItem.scss";
import photos from "mocks/photos";




const PhotoListItem = ({ photo }) => {
  const { id, location, imageSource, username, profile } = photo;
  return (
    <div>
      <img src={profile} alt="Profile" />
      <div>
        <div>
          <span>{location.city},</span>
          <span>{location.country}</span>
        </div>
        <img src={imageSource} alt="Photo" />
        <div>{username}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;
