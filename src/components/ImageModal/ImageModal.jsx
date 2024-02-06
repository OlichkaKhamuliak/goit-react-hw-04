import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { LuSubtitles } from 'react-icons/lu';
import { TiHeart } from 'react-icons/ti';
import { IoLocationOutline } from 'react-icons/io5';
import { MdPhotoCameraFront } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';

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
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Search Photo Modal"
    >
      <img src={urls.regular} alt={alt} />
      <div className={css.description}>
        {descriptions !== null && (
          <div className={css.textWrap}>
            <LuSubtitles size="20" />
            <p className={css.text}>{descriptions}</p>
          </div>
        )}
        {likes !== null && (
          <div className={css.textWrap}>
            <TiHeart size="20" />
            <p>{likes}</p>
          </div>
        )}
        {location !== null && (
          <div className={css.textWrap}>
            <IoLocationOutline size="20" />
            <p>{location}</p>
          </div>
        )}
        {photographerName !== null && (
          <div className={css.textWrap}>
            <MdPhotoCameraFront size="20" />
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
              <FaInstagram size="20" />
              <p>@{instId}</p>
            </div>
          </a>
        )}
      </div>
    </Modal>
  );
};
