import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export const App = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadImages = () => {
    setIsLoading(true);

    axios
      .get('https://pixabay.com/api/', {
        params: {
          q: text,
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

  const onSubmitForm = data => {
    setText(data);
    setPage(1);
    setImages([]);
    loadImages();
  };

  return (
    <Container>
      <Searchbar onSubmit={onSubmitForm} />
      <ImageGallery
        search={text}
        images={images}
        loadImages={loadImages}
        page={page}
        isLoading={isLoading}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </Container>
  );
};
