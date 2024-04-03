import React from "react";
// import "../styles/PhotoListItem.scss";
import photos from "mocks/photos";




const PhotoListItem = ({ data }) => {
  const { id, location, imageSource, username, profile } = data;
  return (
    <div key = {id}>
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
