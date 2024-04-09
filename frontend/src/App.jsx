import React, {useState} from 'react'
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import './App.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


 
const App = () => {
  const [displayModal, setDisplayModal] = useState(false); // State for modal display

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} /> {/* to pass the setDisplayModal function as prop */}
      {displayModal && <PhotoDetailsModal closeDisplayModal={setDisplayModal}/>} {/* Conditionally render the modal */}
    </div>
  );
};

export default App;
