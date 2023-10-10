import React from 'react';
import { Li, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images, handleImageClick }) => {
  return (
    <>
      {images.length > 0 &&
        images.map(img => (
          <Li key={img.id}>
            <Img
              src={img.webformatURL}
              alt={img.id}
              onClick={() => handleImageClick(img)}
            />
          </Li>
        ))}
    </>
  );
};

export default ImageGalleryItem;
