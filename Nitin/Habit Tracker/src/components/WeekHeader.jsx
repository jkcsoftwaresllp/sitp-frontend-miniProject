import React from 'react';
import './WeekHeader.css';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const WeekHeader = ({ weekDates }) => {
  return (
    <div className="week-header">
      <div className="habit-column">Habits</div>
      <div className="days-column">
        {DAYS.map((day, index) => (
          <div key={day} className="day-header">
            <span className="day-name">{day}</span>
            <span className="day-date">{new Date(weekDates[index]).getDate()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekHeader;