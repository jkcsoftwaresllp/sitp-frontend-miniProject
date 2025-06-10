import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Component/SearchBar';
import BookCard from '../Component/BookCard';
import styles from './Home.module.css';

function Home() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      console.log('Searching for:', query);

      const apiKey = import.meta.env.VITE_API_KEY;

      if (!apiKey) {
        alert('API key is missing. Please check your .env file and restart the dev server.');
        return;
      }

      const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
      console.log('API URL:', url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data);

      setBooks(data.items || []);
      if (!data.items || data.items.length === 0) {
        alert('No books found for this query.');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      alert(`Failed to fetch books. ${error.message}`);
    }
  };

  const handleToggleFavorite = (book) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isFavorite = favorites.some((fav) => fav.id === book.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    } else {
      updatedFavorites = [...favorites, book];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setBooks([...books]);
  };

  return (
    <div className={styles.home}>
      <div className="container">
        <header className={styles.header}>
          <h1>Personal Book Library</h1>
          <Link to="/favorites" className={styles.favoritesLink}>
            View Favorites
          </Link>
        </header>

        <SearchBar onSearch={handleSearch} />

        <div className={styles.bookList}>
          {books.length === 0 ? (
            <p>Search for books to get started.</p>
          ) : (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onToggleFavorite={handleToggleFavorite}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;