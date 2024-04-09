import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => { //to receive Modal, photos and topics as props
  const [favPhotos, setFavPhotos] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  

  const toggleFav = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter(id => id !== photoId));
    } else {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favCount={favPhotos.length} />
      <PhotoList photos={photos} toggleFav = {toggleFav} favPhotos={favPhotos} setDisplayModal={setDisplayModal} /> {/* Pass the Modal, togglePhotos and Photos functions */}
      {displayModal && <PhotoDetailsModal onClose={closeModal} />}
    </div>
  );
};

export default HomeRoute;