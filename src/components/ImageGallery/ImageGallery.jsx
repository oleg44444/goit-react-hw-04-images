import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { List } from './ImageGallery.styled';

const ImageGallery = ({
  search,
  images,
  loadImages,
  page,
  isLoading,
  selectedImage,
  setSelectedImage,
}) => {
  const handleImageClick = selectedImage => {
    setSelectedImage(selectedImage);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <List>
        <ImageGalleryItem images={images} handleImageClick={handleImageClick} />
      </List>
      {isLoading ? (
        <Loader />
      ) : (
        images.length > 0 &&
        images.length % 12 === 0 && <Button onClick={loadImages} />
      )}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default ImageGallery;
