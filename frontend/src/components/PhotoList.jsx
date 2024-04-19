import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFav, setSelectedPhoto, favPhotos }) => {
  
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} toggleFav={toggleFav} setSelectedPhoto={setSelectedPhoto} favPhotos={favPhotos} />
      ))}
    </div>
  );
};

export default PhotoList;