// import React from 'react';
// import '../styles/PhotoDetailsModal.scss'
// import closeSymbol from '../assets/closeSymbol.svg';

// // const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
// //   console.log('Selected Photo:', selectedPhoto);
// //   return (
// //     <div className="photo-details-modal">
// //       <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
// //         <img src={closeSymbol} alt="close symbol" />
// //       </button>
// //       {/* Modal content goes here */}
// //     </div>
// //   )
// // };

// const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
//   if (!selectedPhoto) {
//     return null; // Return null if no selected photo
//   }

//   const { urls, similar_photos } = selectedPhoto;

//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//       <div className="photo-details-modal__images">
//         <img className="photo-details-modal__image" src={urls.full} alt="Selected Photo" />
//       </div>
//       <div className="photo-details-modal__top-bar">
//         <h2>Similar Photos</h2>
//         <div className="photo-details-modal__images">
//           {Object.values(similar_photos).map((photo) => (
//             <img key={photo.id} className="similar-photo" src={photo.urls.regular} alt="Similar Photo" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoDetailsModal;
// PhotoDetailsModal.jsx
// import React from 'react';
// import '../styles/PhotoDetailsModal.scss';
// import closeSymbol from '../assets/closeSymbol.svg';
// import PhotoFavButton from 'components/PhotoFavButton';


// const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
//   if (!selectedPhoto) {
//     return null; // Return null if no selected photo
//   }

//   const { urls, similar_photos, user } = selectedPhoto;

//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//       <div className="selected-photo-container">
//         <img className="selected-photo" src={urls.full} alt="Selected Photo" />
//       </div>
//       <div className="photo-details">
//         <div className="photographer-details">
//           <img className="photographer-profile" src={user.profile} alt="Photographer Profile" />
//           <div className="photographer-info">
//             <span className="photographer-name">{user.name}</span>
//             <span className="photographer-username">@{user.username}</span>
//             <span className="photo-location">{`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}</span>
//           </div>
//         </div>
//         <PhotoFavButton isFav={selectedPhoto.isFav} onClick={() => toggleFav(selectedPhoto.id)} />
//       </div>
//       <div className="similar-photos-container">
//         <h2>Similar Photos</h2>
//         <div className="similar-photos-list">
//           {Object.values(similar_photos).map((photo) => (
//             <img key={photo.id} className="similar-photo" src={photo.urls.regular} alt="Similar Photo" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PhotoDetailsModal;
import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {
  if (!selectedPhoto) {
    return null;
  }

  const { urls, similar_photos, user, location } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => closeDisplayModal(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__photographer-info">
        {user && (
          <>
            <img src={user.profile} alt="Photographer" className="photographer-profile" />
            <div className="photographer-details">
              <h3>{user.username}</h3>
              <p>{user.name}</p>
            </div>
          </>
        )}
      </div>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={urls.full} alt="Selected Photo" />
        <p>{location.city}, {location.country}</p>
      </div>
      <div className="photo-details-modal__top-bar">
        <h2>Similar Photos</h2>
        <div className="photo-details-modal__images">
          {similar_photos.map((photo) => (
            // <img key={photo.id} className="similar-photo" src={photo.urls.regular} alt="Similar Photo" />
            <PhotoList photos={similar_photos} toggleFav={toggleFav} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;