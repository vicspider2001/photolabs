import React, {useState} from 'react'
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';



 
const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // State for modal display
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto} /> {/* to pass the setDisplayModal function as prop */}
      {displayModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={setDisplayModal}/>} {/* Conditionally render the modal */}
    </div>
  );
};

export default App;
