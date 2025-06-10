import React from 'react';
import styles from './AdminDashboard.module.css';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ changeUser, employees, addTaskToEmployee }) => {
  return (
    <div className={styles.container}>
      <Header changeUser={changeUser} />
      <CreateTask employees={employees} addTaskToEmployee={addTaskToEmployee} />
      <AllTask employees={employees} />
    </div>
  );
};

export default AdminDashboard;
