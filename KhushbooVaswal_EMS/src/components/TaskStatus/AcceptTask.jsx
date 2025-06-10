import React from 'react';
import styles from './AcceptTask.module.css';

const AcceptTask = ({ data }) => {
  return (
    <div className={styles.task}>
      <div className={styles.header}>
        <h3 className={styles.categoryBadge}>{data.category}</h3>
        <h4 className={styles.dueDate}>{data.dueDate}</h4>
      </div>

      <h1 className={styles.title}>{data.title}</h1>

      <p className={styles.description}>{data.description}</p>

      <div className={styles.buttonRow}>
        <button className={styles.buttonCompleted}>Mark as Completed</button>
        <button className={styles.buttonFailed}>Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
