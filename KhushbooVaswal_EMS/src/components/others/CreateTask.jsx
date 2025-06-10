import React, { useState } from 'react';
import styles from './CreateTask.module.css';

const CreateTask = ({ employees, addTaskToEmployee }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!assignTo) {
      alert('Please assign task to an employee');
      return;
    }

    const newTask = {
      id: Date.now(),  // Unique ID added here
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDate,
      category,
      active: true,
      new: true,
      failed: false,
      completed: false,
    };

    addTaskToEmployee(Number(assignTo), newTask);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.formContainer}>
        <div className={styles.leftSection}>
          <div className={styles.inputGroup}>
            <h3>Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <h3>Date</h3>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <h3>Assign To</h3>
            <select
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.firstname}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <h3>Category</h3>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design, dev, etc"
              required
            />
          </div>
        </div>

        <div className={styles.rightSection}>
          <h3>Description</h3>
          <textarea
            rows="10"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit">Create Task</button>
        </div>
      </div>
    </form>
  );
};

export default CreateTask;
