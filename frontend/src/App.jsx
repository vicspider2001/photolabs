import React from 'react';

import PhotoListItem from './components/PhotoListItem';
// import './App.scss';


const sampleDataForPhotoListItem = {
  
    id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  
  
};
  
const App = () => {
  // Create an array with a length of 3
  const photos = new Array(3).fill(null);

  return (
    <div className="App">
      {/* Map over the array and render a PhotoListItem component for each item */}
      {photos.map((_, index) => (
        <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
      ))}
    </div>
  );
};

export default App;
