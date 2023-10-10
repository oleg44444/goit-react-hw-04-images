import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!image) {
    return null;
  }

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalDiv>
        <img src={image.largeImageURL} alt={image.tags} />
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
