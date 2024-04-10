// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter(id => id !== photoId));
    } else {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  const onClosePhotoDetailsModal = () => {
    setSelectedPhoto(null);
  };

  return {
    selectedPhoto,
    favPhotos,
    toggleFav,
    onClosePhotoDetailsModal,
    setSelectedPhoto,
    
  };
};

export default useApplicationData;
