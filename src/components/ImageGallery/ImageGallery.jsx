import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard images={image} />
        </li>
      ))}
    </ul>
  );
};
