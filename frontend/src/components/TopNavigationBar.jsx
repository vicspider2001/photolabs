
import React, { useState } from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, favCount, fetchPhotosByTopic, setShowAlert, setSelected }) => {
  
  // Function to handle clicking on the FavBadge
  const handleFavBadgeClick = () => {
    setShowAlert(true); // Set showAlert to true when FavBadge is clicked
        
  };

  const favIconEffect = () => {
    setSelected(true); // Set setSelcted to true when FavBadge is clicked and fill favIcon with color
    
  };

  

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />
      <FavBadge isFavPhotoExist={favCount > 0} onClick={handleFavBadgeClick} selected={favIconEffect} setSelected={setSelected} />
    </div>
  );
};

export default TopNavigation;

