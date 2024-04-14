import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favPhotos, toggleFav, setSelectedPhoto, fetchPhotosByTopic }) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favCount={favPhotos.length} fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList photos={photos} toggleFav={toggleFav} setSelectedPhoto={setSelectedPhoto} />
    </div>
  );
};

export default HomeRoute;