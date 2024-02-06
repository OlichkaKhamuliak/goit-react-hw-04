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
          <p>
            {' '}
            <LuSubtitles /> {descriptions}
          </p>
        )}
        {likes !== null && (
          <p>
            <TiHeart /> {likes}
          </p>
        )}
        {location !== null && (
          <p>
            <IoLocationOutline /> {location}
          </p>
        )}
        {photographerName !== null && (
          <p>
            <MdPhotoCameraFront /> {photographerName}
          </p>
        )}
        {instId !== null && (
          <a
            href={`https://www.instagram.com/${instId}/`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram icon"
          >
            <p>
              <FaInstagram /> @{instId}
            </p>
          </a>
        )}
      </div>
    </Modal>
  );
};
