import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Placeholder toggleFav function
  const toggleFav = (photoId) => {
    console.log("Toggling favorite for photo with ID:", photoId);
   
  };
  
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setSelectedPhoto={setSelectedPhoto} />
      {selectedPhoto && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={() => setSelectedPhoto(null)} toggleFav={toggleFav} />}
    </div>
  );
};

export default App;