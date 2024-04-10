import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setSelectedPhoto, favPhotos, toggleFav }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favCount={favPhotos.length} />
      <PhotoList photos={photos} toggleFav={toggleFav} setSelectedPhoto={setSelectedPhoto} />
    </div>
  );
};

export default HomeRoute;