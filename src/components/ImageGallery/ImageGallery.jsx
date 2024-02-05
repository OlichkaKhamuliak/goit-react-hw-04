import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, alt_description, urls, color }) => (
        <li key={id}>
          <ImageCard color={color} alt={alt_description} urls={urls} />
        </li>
      ))}
    </ul>
  );
};
