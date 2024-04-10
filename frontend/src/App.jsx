import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setSelectedPhoto={setSelectedPhoto} />
      {selectedPhoto && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={() => setSelectedPhoto(null)} />}
    </div>
  );
};

export default App;