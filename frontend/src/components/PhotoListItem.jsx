import React from "react";
// import "../styles/PhotoListItem.scss";
import photos from "mocks/photos";




const PhotoListItem = ({ data }) => {
  return (
    <div key = {data.id}>
      <img src={data.profile} alt="Profile" />
      <div>
        <div>
          <span>{data.location.city},</span>
          <span>{data.location.country}</span>
        </div>
        <img src={data.imageSource} alt="Photo" />
        <div>{data.username}</div>
      </div>
    </div>
  );
};

export default PhotoListItem;
