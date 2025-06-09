import BookCard from './BookCard';
import styles from './FavoriteList.module.css';

function FavoriteList({ favorites, onToggleFavorite }) {
  return (
    <div className={styles.list}>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      )}
    </div>
  );
}

export default FavoriteList;