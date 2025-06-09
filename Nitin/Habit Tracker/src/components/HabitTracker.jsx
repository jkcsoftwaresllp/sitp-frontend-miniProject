import React, { useState, useEffect } from 'react';
import HabitRow from './HabitRow';
import AddHabitForm from './AddHabitForm';
import WeekHeader from './WeekHeader';
import './HabitTracker.css';

// Predefined habits
const DEFAULT_HABITS = [
  { id: 1, name: 'Drink Water', icon: '💧' },
  { id: 2, name: 'Exercise', icon: '🏃‍♂️' },
  { id: 3, name: 'Read Books', icon: '📚' },
  { id: 4, name: 'Meditate', icon: '🧘‍♀️' },
  { id: 5, name: 'Sleep 8hrs', icon: '😴' }
];

// Get current week dates
const getCurrentWeekDates = () => {
  const today = new Date();
  const currentDay = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (currentDay === 0 ? 6 : currentDay - 1));
  
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date.toISOString().split('T')[0];
  });
};

const HabitTracker = () => {
  const [habits, setHabits] = useState(DEFAULT_HABITS);
  const [completedHabits, setCompletedHabits] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [weekDates] = useState(getCurrentWeekDates());

  // Load data from localStorage on mount
  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    const savedCompleted = localStorage.getItem('completedHabits');
    
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
    if (savedCompleted) {
      setCompletedHabits(JSON.parse(savedCompleted));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem('completedHabits', JSON.stringify(completedHabits));
  }, [completedHabits]);

  const toggleHabit = (habitId, date) => {
    const key = `${habitId}-${date}`;
    setCompletedHabits(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const addNewHabit = (habitData) => {
    const newHabit = {
      id: Date.now(),
      name: habitData.name,
      icon: habitData.icon
    };
    setHabits(prev => [...prev, newHabit]);
    setShowAddForm(false);
  };

  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompletedHabits({});
      setHabits(DEFAULT_HABITS);
      localStorage.removeItem('habits');
      localStorage.removeItem('completedHabits');
    }
  };

  const totalProgress = () => {
    const totalPossible = habits.length * 7;
    const totalCompleted = Object.values(completedHabits).filter(Boolean).length;
    return totalPossible > 0 ? Math.round((totalCompleted / totalPossible) * 100) : 0;
  };

  return (
    <div className="habit-tracker">
      <header className="header">
        <h1>🎯 Habit Tracker</h1>
        <div className="header-stats">
          <span className="overall-progress">Overall Progress: {totalProgress()}%</span>
        </div>
      </header>

      <div className="controls">
        <button 
          className="add-habit-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? 'Cancel' : '➕ Add New Habit'}
        </button>
        <button className="reset-btn" onClick={resetAllData}>
          🧹 Reset All
        </button>
      </div>

      {showAddForm && (
        <AddHabitForm 
          onAddHabit={addNewHabit}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      <WeekHeader weekDates={weekDates} />

      <div className="habits-container">
        {habits.map(habit => (
          <HabitRow
            key={habit.id}
            habit={habit}
            weekDates={weekDates}
            completedHabits={completedHabits}
            onToggleHabit={toggleHabit}
          />
        ))}
      </div>

      {habits.length === 0 && (
        <div className="empty-state">
          <p>No habits yet. Add your first habit to get started! 🌟</p>
        </div>
      )}
    </div>
  );
};

export default HabitTracker;