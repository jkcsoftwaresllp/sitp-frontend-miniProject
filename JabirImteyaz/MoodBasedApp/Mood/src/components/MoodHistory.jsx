import React from "react";
import "./MoodHistory.css";

const MoodHistory = ({ moodHistory, onDelete }) => {
  if (moodHistory.length === 0) {
    return <p className="no-history">No mood history yet.</p>;
  }

  return (
    <div className="mood-history-container">
      <h3>Mood History</h3>
      <ul className="mood-history-list">
        {moodHistory.map((entry) => (
          <li
            key={entry.timestamp}
            className="mood-history-item"
            style={{ backgroundColor: entry.color || "#eee" }}
          >
            <div className="mood-history-info">
              <span className="mood-emoji">{entry.emoji || "🙂"}</span>
              <strong>{entry.name}</strong> —{" "}
              <em>{new Date(entry.timestamp).toLocaleString()}</em>
            </div>
            <button
              className="delete-button"
              onClick={() => onDelete(entry.timestamp)}
              title="Delete"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodHistory;
