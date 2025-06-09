import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

const CATEGORIES = [
  "Random",
  "Science",
  "Trivia",
];

const fetchFactFromCategory = async (category) => {
  try {
    switch (category) {
      case "Science": {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        return data.fact;
      }
      case "Trivia": {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = await res.json();
        return data.text;
      }
      default: {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const data = await res.json();
        return data.text;
      }
    }
  } catch (error) {
    return "Could not fetch a fact. Please try again.";
  }
};

const Home = () => {
  const [fact, setFact] = useState("");
  const [liked, setLiked] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Random");

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  
  useEffect(() => {
    fetchFact(selectedCategory);
   
  }, [selectedCategory]);

  const fetchFact = async (category) => {
    setFact("Loading...");
    const newFact = await fetchFactFromCategory(category);
    setFact(newFact);
    setLiked(false);
  };

  const handleLike = () => setLiked((prev) => !prev);

  const handleSave = () => {
    if (fact && !favorites.includes(fact)) {
      const updated = [...favorites, fact];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Daily Discovery</h1>

      <select
        className={styles.dropdown}
        value={selectedCategory}
        onChange={handleCategoryChange}
        aria-label="Select category"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div className={styles.factBox}>
        <p className={styles.factText}>{fact}</p>
        <div className={styles.buttons}>
          <button
            onClick={handleLike}
            className={`${styles.button} ${liked ? styles.liked : ""}`}
            aria-pressed={liked}
          >
            <span role="img" aria-label="like">{liked ? "💖" : "❤️"}</span>
            {liked ? "Liked" : "Like"}
          </button>
          <button
            onClick={handleSave}
            className={styles.button}
            disabled={favorites.includes(fact) || !fact}
          >
            <span role="img" aria-label="save">💾</span>
            {favorites.includes(fact) ? "Saved" : "Save"}
          </button>
          <button
            onClick={() => fetchFact(selectedCategory)}
            className={styles.button}
          >
            <span role="img" aria-label="new">🔁</span>
            New Fact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
