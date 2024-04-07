import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList  from './components/PhotoList';
import './App.scss';
import TopicList from 'components/TopicList';

 
const App = () => {
  
  return (
    <div className="App">
      <PhotoList/>
      <TopicList/>
      
    </div>
  );
};

export default App;
