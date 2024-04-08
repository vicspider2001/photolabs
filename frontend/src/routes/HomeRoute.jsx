import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics}) => {
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter(id => id !== photoId));
    } else {
      setFavPhotos([...favPhotos, photoId]);
    }
  };
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favCount={favPhotos.length} />
      <PhotoList photos={photos} toggleFav = {toggleFav} favPhotos={favPhotos} />
    </div>
  );
};

export default HomeRoute;