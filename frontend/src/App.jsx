// import React, {useState} from 'react'
// import HomeRoute from './routes/HomeRoute';
// import photos from 'mocks/photos';
// import topics from 'mocks/topics';
// import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import './App.scss';



 
// const App = () => {
//   const [displayModal, setDisplayModal] = useState(false); // State for modal display
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   return (
//     <div className="App">
//       <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto} /> {/* to pass the setDisplayModal function as prop */}
//       {displayModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={setDisplayModal}/>} {/* Conditionally render the modal */}
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Placeholder toggleFav function
  const toggleFav = (photoId) => {
    console.log("Toggling favorite for photo with ID:", photoId);
    // Implement your toggle logic here
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setDisplayModal={setDisplayModal} setSelectedPhoto={setSelectedPhoto} />
      {displayModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} closeDisplayModal={setDisplayModal} toggleFav={toggleFav} />}
    </div>
  );
};

export default App;