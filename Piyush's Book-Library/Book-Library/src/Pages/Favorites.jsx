import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteList from '../Component/FavoriteList';
import styles from './Favorites.module.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = (book) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className={styles.favorites}>
      <div className="container">
        <header className={styles.header}>
          <h1>Favorites</h1>
          <Link to="/" className={styles.homeLink}>
            Back to Home
          </Link>
        </header>
        <FavoriteList favorites={favorites} onToggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  );
}

export default Favorites;