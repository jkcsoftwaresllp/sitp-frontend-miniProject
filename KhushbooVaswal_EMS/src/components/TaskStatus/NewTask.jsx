import React from 'react';
import styles from './NewTask.module.css';

const NewTask = ({ data }) => {
  return (
    <div className={styles.task}>
      <div className={styles.header}>
        <h3 className={styles.categoryBadge}>{data.category}</h3>
        <h4 className={styles.dueDate}>{data.dueDate}</h4>
      </div>

      <h1 className={styles.title}>{data.title}</h1>

      <p className={styles.description}>{data.description}</p>

      <div className={styles.buttonContainer}>
        <button className={styles.acceptButton}>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
