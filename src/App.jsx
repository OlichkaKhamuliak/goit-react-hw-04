import { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { getPhotos } from './api';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { LoadMoreBtn } from './components/LoadMoreBtn/LoadMoreBtn';
import { Toaster } from 'react-hot-toast';
import { Loader } from './components/Loader/Loader';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import css from './components/ErrorMessage/ErrorMessage.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [emptyResults, setEmptyResults] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getPhotos(query.trim(), page);
        if (results.length === 0) {
          setEmptyResults(true);
          return;
        }
        // console.log(results);
        setImages(prevImages => [...prevImages, ...results]);
        setVisibleBtn(total_pages !== page);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = value => {
    if (!value.trim()) {
      setEmptyInput(true);
      setImages([]);
      setVisibleBtn(false);
      return;
    }
    setEmptyInput(false);
    setQuery(value);
    setPage(1);
    setImages([]);
    setEmptyResults(false);
    setVisibleBtn(false);
    setError(false);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {emptyInput && <ErrorMessage>Please enter text to search images.</ErrorMessage>}

      {visibleBtn && <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading} />}
      {emptyResults && <ErrorMessage>There are no images 😭</ErrorMessage>}
      {isLoading && <Loader />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Toaster
        toastOptions={{
          className: css.toaster,
        }}
      />
    </div>
  );
}

export default App;
