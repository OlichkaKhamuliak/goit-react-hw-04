import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ urls, alt_description, color }) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <div>
      <div onClick={toggle} style={{ backgroundColor: color, borderColor: color }}>
        <img src={urls.small} alt={alt_description} />
      </div>
      <ImageModal alt={alt_description} src={urls} modalIsOpen={showModal} closeModal={toggle} />
    </div>
  );
};
