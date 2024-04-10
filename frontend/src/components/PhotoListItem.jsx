import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, toggleFav, setSelectedPhoto }) => {
  if (!photo) {
    return <div>No photo data available</div>;
  };

  const { id, location, urls, user,  } = photo;
  const handleClick = () => {
    toggleFav(id);
  };

  const handleModalClick = () => {
    console.log("setDisplayModal click")
    setSelectedPhoto(photo);
    
  };
  

  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={handleClick}/>
      <img className="photo-list__image" src={urls.regular} alt="Photo" onClick={handleModalClick}/>
      <div className="photo-list__user-details">
        <span><img className="photo-list__user-profile" src={user.profile} alt="Profile"/></span>
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">
            <span>{location.city},</span>
            <span>{location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;