import React, { useState } from 'react';
import { Header, Form, Button, Input, Label } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const onHandleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const inputText = inputValue.toLowerCase();
    onSubmit(inputText);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button>
          <Label className="button-label"></Label>
        </Button>

        <Input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleChange}
          value={inputValue}
        />
      </Form>
    </Header>
  );
};

export default Searchbar;
