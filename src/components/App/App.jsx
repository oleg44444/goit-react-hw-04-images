import React, { useState } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export const App = () => {
  const [text, setText] = useState('');

  const onSubmitForm = data => {
    setText(data);
  };
  return (
    <Container>
      <Searchbar onSubmit={onSubmitForm} />
      <ImageGallery search={text} />
    </Container>
  );
};
