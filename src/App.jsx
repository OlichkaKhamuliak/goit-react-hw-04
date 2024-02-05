import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPhotos } from './api';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getPhotos(query.trim(), page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        console.log(results);
        setImages(prevImages => [...prevImages, ...results]);
        setIsVisible(total_pages !== page);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = value => {
    setQuery(value);
    setPage(1);
    setImages([]);
    setIsEmpty(false);
    setIsVisible(false);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isVisible && <LoadMoreBtn onClick={handleLoadMore} disabled={ isLoading } />}
      {isEmpty && <ErrorMessage >There are no images ... 😭</ErrorMessage>
}
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Toaster position="top-right" reverseOrder={true} />;
    </div>
  );
}

export default App;
