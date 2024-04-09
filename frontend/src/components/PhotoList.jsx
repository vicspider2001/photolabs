import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";


const PhotoList = ({ photos, toggleFav, favPhotos, setDisplayModal }) => {
  
  return (
    <div className="photo-list">
      {photos.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav} favPhotos={favPhotos} setDisplayModal={setDisplayModal}/>;
    })}
    </div>
  );
};

export default PhotoList;
