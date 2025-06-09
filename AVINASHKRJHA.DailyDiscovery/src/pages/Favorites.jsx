import React, { useEffect, useState } from "react";
import styles from "./Favorites.module.css";
import { FaTrash } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleDelete = (factToRemove) => {
    const updated = favorites.filter(fact => fact !== factToRemove);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className={styles.favContainer}>
      <h1 className={styles.heading}>Your Favorite Facts</h1>
      {favorites.length === 0 ? (
        <div className={styles.emptyState}>
          <span role="img" aria-label="empty" className={styles.emptyIcon}>💔</span>
          <p className={styles.emptyText}>No favorite facts saved yet.</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {favorites.map((fact, index) => (
            <li key={index} className={styles.factItem}>
              <span className={styles.factIcon} role="img" aria-label="star">🌟</span>
              <span className={styles.factText}>{fact}</span>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(fact)}
                aria-label="Remove from favorites"
                title="Remove"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
