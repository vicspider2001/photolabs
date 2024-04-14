// App.jsx
import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const { selectedPhoto, favPhotos, toggleFav, onClosePhotoDetailsModal, setSelectedPhoto, photoData, topicData, fetchPhotosByTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={photoData} topics={topicData} favPhotos={favPhotos} toggleFav={toggleFav} setSelectedPhoto={setSelectedPhoto} fetchPhotosByTopic={fetchPhotosByTopic} />
      {selectedPhoto && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={onClosePhotoDetailsModal} toggleFav={toggleFav} photos={photoData} />}
    </div>
  );
};

export default App;
