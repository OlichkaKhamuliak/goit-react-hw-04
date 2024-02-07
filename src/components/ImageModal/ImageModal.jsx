import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { LuSubtitles } from 'react-icons/lu';
import { TiHeart } from 'react-icons/ti';
import { IoLocationOutline } from 'react-icons/io5';
import { MdPhotoCameraFront } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';
import { useState } from 'react';

Modal.setAppElement('#root');

export const ImageModal = ({
  urls,
  alt,
  modalIsOpen,
  closeModal,
  color,
  likes,
  descriptions,
  location,
  photographerName,
  instId,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = loading => {
    setIsLoading(loading);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: color,
      borderColor: color,
      width: '80%',
      padding: '7px',
      maxHeight: '90%',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Search Photo Modal"
    >
      {isLoading && <Loader />}
      <div className={css.modal}>
        <img className={css.img} src={urls.regular} alt={alt} onLoad={() => handleLoading(false)} />
        <div className={css.description}>
          {descriptions !== null && (
            <div className={css.textWrap}>
              <LuSubtitles className={css.icon} size="20" />
              <p>{descriptions}</p>
            </div>
          )}
          {likes !== null && (
            <div className={css.textWrap}>
              <TiHeart className={css.icon} size="20" />
              <p>{likes}</p>
            </div>
          )}
          {location !== null && (
            <div className={css.textWrap}>
              <IoLocationOutline className={css.icon} size="20" />
              <p>{location}</p>
            </div>
          )}
          {photographerName !== null && (
            <div className={css.textWrap}>
              <MdPhotoCameraFront className={css.icon} size="20" />
              <p>{photographerName}</p>
            </div>
          )}
          {instId !== null && (
            <a
              href={`https://www.instagram.com/${instId}/`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram icon"
            >
              <div className={css.textWrap}>
                <FaInstagram className={css.icon} size="20" />
                <p>@{instId}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};
