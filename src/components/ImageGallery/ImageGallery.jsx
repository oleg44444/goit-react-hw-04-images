import React, { useState, useEffect } from 'react';
import { getImages } from '../../API/Api';
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

  const [prevSearch, setPrevSearch] = useState('');

  const reset = () => {
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!search || search !== prevSearch) {
      setPrevSearch(search);
      reset();
      return;
    }

    setIsLoading(true);

    getImages(search, page)
      .then(({ hits }) => {
        setImages(prevImages => [...prevImages, ...hits]);
      })
      .catch(error => {
        console.error('Помилка при отриманні даних:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [search, page, prevSearch]);

  const handleImageClick = selectedImage => {
    setSelectedImage(selectedImage);
  };
  const loadMore = () => {
    setPage(prevpage => prevpage + 1);
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
        images.length % 12 === 0 && (
          <Button
            onClick={() => {
              loadMore();
            }}
          />
        )
      )}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default ImageGallery;
