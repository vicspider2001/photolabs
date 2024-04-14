import { useEffect, useReducer } from 'react';


// Define action types
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const TOGGLE_FAV = 'TOGGLE_FAV';
const CLOSE_PHOTO_DETAILS_MODAL = 'CLOSE_PHOTO_DETAILS_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA'; 
const SET_TOPIC_DATA = 'SET_TOPIC_DATA'; 

// Define initial state
const initialState = {
  selectedPhoto: null,
  favPhotos: [],
  photoData: [],
  topicData: []
};


// Reducer function to handle state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case TOGGLE_FAV:
      if (state.favPhotos.includes(action.payload)) {
        return { ...state, favPhotos: state.favPhotos.filter(id => id !== action.payload) };
      } else {
        return { ...state, favPhotos: [...state.favPhotos, action.payload] };
      }
    case CLOSE_PHOTO_DETAILS_MODAL:
      return { ...state, selectedPhoto: null };
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
        return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Action creators
  const setSelectedPhoto = (photoId) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photoId });
  };

  const toggleFav = (photoId) => {
    dispatch({ type: TOGGLE_FAV, payload: photoId });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_PHOTO_DETAILS_MODAL });
  };

  //Fetching Photo Data
  useEffect(() => {
  fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }))
    .catch(error => console.error('Error fetching photos:', error));
  }, []);

//Fetching Topics Data
useEffect(() => {
  fetch('http://localhost:8001/api/topics')
    .then(response => response.json())
    .then(data => dispatch({ type: SET_TOPIC_DATA, payload: data }))
    .catch(error => console.error('Error fetching topics:', error));
}, []);

// Fetch photos for a specific topic
const fetchPhotosByTopic = (topic_id) => {
  fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
    .then(response => response.json())
    .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }))
    .catch(error => console.error(`Error fetching photos for topic ${topic_id}:`, error));
};



  return {
    ...state,
    setSelectedPhoto,
    toggleFav,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
