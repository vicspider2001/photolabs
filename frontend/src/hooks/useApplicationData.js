import { useReducer } from 'react';

// Define action types
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const TOGGLE_FAV = 'TOGGLE_FAV';
const CLOSE_PHOTO_DETAILS_MODAL = 'CLOSE_PHOTO_DETAILS_MODAL';

// Define initial state
const initialState = {
  selectedPhoto: null,
  favPhotos: [],
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

  return {
    ...state,
    setSelectedPhoto,
    toggleFav,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
