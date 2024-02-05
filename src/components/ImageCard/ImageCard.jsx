import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css'

export const ImageCard = ({ urls, alt_description, color }) => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <div>
      <div className={css.photoCard} onClick={toggle} style={{ backgroundColor: color, borderColor: color }}>
        <img className={css.img} src={urls.small} alt={alt_description} />
      </div>
      <ImageModal alt={alt_description} urls={urls} modalIsOpen={showModal} closeModal={toggle} />
    </div>
  );
};
