import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BookDetail.module.css';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [savedRating, setSavedRating] = useState(null);
  const [savedComment, setSavedComment] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) throw new Error('API key is missing');
        const url = `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`API error: ${response.status}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
        alert(`Failed to fetch book details: ${error.message}`);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { bookId: id, rating, comment };
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    const updatedReviews = reviews.filter((r) => r.bookId !== id).concat(review);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setSavedRating(rating);
    setSavedComment(comment);
    setRating(0);
    setComment('');
  };

  const storedReview = JSON.parse(localStorage.getItem('reviews') || '[]').find(
    (r) => r.bookId === id
  );

  if (!book) return <div>Loading...</div>;

  return (
    <div className={styles.detail}>
      <h4>Book Details</h4>
      <p><strong>Title:</strong> {book.volumeInfo.title || 'Unknown'}</p>
      <p><strong>Description:</strong> {book.volumeInfo.description || 'No description available'}</p>
      <p><strong>Publisher:</strong> {book.volumeInfo.publisher || 'Unknown'}</p>
      <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate || 'Unknown'}</p>
      <h4>Add Review</h4>
      <form onSubmit={handleSubmit} className={styles.reviewForm}>
        <label>
          Rating (1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className={styles.input}
          />
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Save Review
        </button>
      </form>
      {(storedReview || savedRating) && (
        <div className={styles.savedReview}>
          <h4>Your Review</h4>
          <p><strong>Rating:</strong> {storedReview?.rating || savedRating}</p>
          <p><strong>Comment:</strong> {storedReview?.comment || savedComment}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetail;