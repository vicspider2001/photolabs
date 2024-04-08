import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";


const PhotoList = ({ photos }) => {
  
  return (
    <div className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo}/>;
    })}
    </div>
  );
};

export default PhotoList;
