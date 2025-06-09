import React from "react";

const MoodHistory = ({ moodHistory, onDelete }) => {
  if (moodHistory.length === 0) {
    return <p style={{ marginTop: "20px" }}>No mood history yet.</p>;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "30px auto",
      }}
    >
      <h3>Mood History</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {moodHistory.map((entry) => (
          <li
            key={entry.timestamp}
            style={{
              backgroundColor: entry.color || "#eee",
              marginBottom: "10px",
              padding: "10px 15px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                {entry.emoji || "🙂"}
              </span>
              <strong>{entry.name}</strong> —{" "}
              <em>{new Date(entry.timestamp).toLocaleString()}</em>
            </div>
            <button
              onClick={() => onDelete(entry.timestamp)}
              style={{
                background: "transparent",
                border: "none",
                color: "#900",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
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
