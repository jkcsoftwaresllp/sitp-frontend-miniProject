// import { useState } from 'react';
// import styles from './BookCard.module.css';
// import BookDetail from './BookDetail';

// function BookCard({ book, onToggleFavorite }) {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleFavoriteClick = () => {
//     onToggleFavorite(book);
//   };

//   const isFavorite = JSON.parse(localStorage.getItem('favorites') || '[]').some(
//     (fav) => fav.id === book.id
//   );

//   return (
//     <div className={styles.card}>
//       <img
//         src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}
//         alt={book.volumeInfo.title}
//         className={styles.coverImage}
//       />
//       <h3 className={styles.title}>{book.volumeInfo.title}</h3>
//       <p className={styles.authors}>
//         {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
//       </p>
//       <button
//         onClick={() => setShowDetails(!showDetails)}
//         className={styles.detailsButton}
//       >
//         {showDetails ? 'Hide Details' : 'View Details'}
//       </button>
//       <button
//         onClick={handleFavoriteClick}
//         className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
//       >
//         {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
//       </button>
//       {showDetails && <BookDetail book={book} />}
//     </div>
//   );
// }

// export default BookCard;

import { Link } from 'react-router-dom';
import styles from './BookCard.module.css';

function BookCard({ book, onToggleFavorite }) {
  const isFavorite = JSON.parse(localStorage.getItem('favorites') || '[]').some(
    (fav) => fav.id === book.id
  );

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192'}
          alt={book.volumeInfo.title}
          className={styles.coverImage}
        />
        <h3 className={styles.title}>{book.volumeInfo.title}</h3>
        <p className={styles.authors}>
          {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
        </p>
        <Link to={`/book/${book.id}`} className={styles.detailsButton}>
          View Details
        </Link>
        <button
          onClick={() => onToggleFavorite(book)}
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : ''}`}
        >
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
      </div>
    </div>
  );
}

export default BookCard;