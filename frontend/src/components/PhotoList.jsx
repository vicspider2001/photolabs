import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = () => {
  
  return (
    <div className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo}/>;
    })}
    </div>
  );
};

export default PhotoList;
