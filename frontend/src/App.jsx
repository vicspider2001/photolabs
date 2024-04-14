// App.jsx
import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';

const App = () => {
  const { selectedPhoto, favPhotos, toggleFav, onClosePhotoDetailsModal, setSelectedPhoto, photoData, topicData } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} toggleFav={toggleFav} setSelectedPhoto={setSelectedPhoto} />
      {selectedPhoto && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={onClosePhotoDetailsModal} toggleFav={toggleFav} photos={photoData} />}
    </div>
  );
};

export default App;
