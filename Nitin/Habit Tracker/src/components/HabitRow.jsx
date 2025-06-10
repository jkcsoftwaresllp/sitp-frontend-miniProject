import React from 'react';
import './HabitRow.css';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const HabitRow = ({ habit, weekDates, completedHabits, onToggleHabit }) => {
  const completedCount = weekDates.reduce((count, date) => {
    return completedHabits[`${habit.id}-${date}`] ? count + 1 : count;
  }, 0);

  const progressPercentage = (completedCount / 7) * 100;

  return (
    <div className="habit-row">
      <div className="habit-info">
        <span className="habit-icon">{habit.icon}</span>
        <span className="habit-name">{habit.name}</span>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <span className="progress-text">{completedCount}/7</span>
      </div>
      <div className="habit-days">
        {weekDates.map((date, index) => (
          <button
            key={date}
            className={`day-button ${completedHabits[`${habit.id}-${date}`] ? 'completed' : ''}`}
            onClick={() => onToggleHabit(habit.id, date)}
          >
            <span className="day-name">{DAYS[index]}</span>
            <span className="day-date">{new Date(date).getDate()}</span>
            {completedHabits[`${habit.id}-${date}`] && <span className="checkmark">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabitRow;