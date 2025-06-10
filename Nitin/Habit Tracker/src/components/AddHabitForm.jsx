import React, { useState } from 'react';
import './AddHabitForm.css';

const AddHabitForm = ({ onAddHabit, onCancel }) => {
  const [habitName, setHabitName] = useState('');
  const [habitIcon, setHabitIcon] = useState('📌');

  const handleSubmit = () => {
    if (habitName.trim()) {
      onAddHabit({ name: habitName.trim(), icon: habitIcon });
      setHabitName('');
      setHabitIcon('📌');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="add-habit-form">
      <div className="form-row">
        <input
          type="text"
          placeholder="Enter habit name..."
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          onKeyPress={handleKeyPress}
          className="habit-input"
          autoFocus
        />
        <input
          type="text"
          placeholder="📌"
          value={habitIcon}
          onChange={(e) => setHabitIcon(e.target.value)}
          className="icon-input"
          maxLength="2"
        />
        <button onClick={handleSubmit} className="add-btn">Add</button>
        <button onClick={onCancel} className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default AddHabitForm;