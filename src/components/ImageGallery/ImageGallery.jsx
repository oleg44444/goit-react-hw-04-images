import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ search }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (search.length > 0) {
      setPage(1);
      setImages([]);
      loadImages();
    }
  }, [search]);

  const loadImages = () => {
    setIsLoading(true);

    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: search,
          page: page,
          per_page: 12,
          key: '38612170-77e451be80bcbbe7a33b7fee0',
        },
      })
      .then(response => {
        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setPage(prevPage => prevPage + 1);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
        setIsLoading(false);
      });
  };

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
