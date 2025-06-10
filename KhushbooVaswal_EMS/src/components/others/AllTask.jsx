import React from "react";
import styles from "./AllTask.module.css";

const AllTask = ({ employees }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.taskCard} ${styles.blue}`}>
        <h3>Employee Name</h3>
        <h3>New Task</h3>
        <h3>Active Task</h3>
        <h3>Completed</h3>
        <h3>Failed</h3>
      </div>
      {employees.map((elem, idx) => (
        <div key={idx} className={`${styles.taskCard} ${styles.blue}`}>
          <h3>{elem.firstname}</h3>
          <h3>{elem.taskStats.new}</h3>
          <h3>{elem.taskStats.active}</h3>
          <h3>{elem.taskStats.completed}</h3>
          <h3>{elem.taskStats.failed}</h3>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
