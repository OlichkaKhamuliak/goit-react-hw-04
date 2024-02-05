import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, alt_description, urls, color }) => (
        <li key={id}>
          <ImageCard color={color} alt={alt_description} src={urls} />
        </li>
      ))}
    </ul>
  );
};
