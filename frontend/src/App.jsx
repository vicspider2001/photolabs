import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter(id => id !== photoId));
    } else {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setSelectedPhoto={setSelectedPhoto} favPhotos={favPhotos} toggleFav={toggleFav}/>
      {selectedPhoto && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={() => setSelectedPhoto(null)} toggleFav={toggleFav} photos={photos}/>}
    </div>
  );
};

export default App;