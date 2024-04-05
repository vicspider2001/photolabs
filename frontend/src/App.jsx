import React from 'react';

import PhotoListItem from './components/PhotoListItem';
// import './App.scss';


const sampleDataForPhotoListItem = [
  {
    id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  
  {
    id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },

  {
    id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },

]
  



const App = () => {
  
    return (
      <div className="App">
        
        {sampleDataForPhotoListItem.map((photoData) => (
          <PhotoListItem key={photoData.id} photo={photoData} />
        ))}
          
      </div>
    );
  
  
};

export default App;
