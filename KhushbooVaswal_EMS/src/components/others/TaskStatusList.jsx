import React from "react";
import styles from "./TaskStatusList.module.css";

const TaskStatusList = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.bg1}`}>
        <h2 className={styles.fontBold}>{data.taskStats.new}</h2>
        <h2 className={styles.fontSemi}>New Task</h2>
      </div>
      <div className={`${styles.card} ${styles.bg2}`}>
        <h2 className={styles.fontBold}>{data.taskStats.active}</h2>
        <h2 className={styles.fontSemi}>Accepted Task</h2>
      </div>
      <div className={`${styles.card} ${styles.bg3}`}>
        <h2 className={styles.fontBold}>{data.taskStats.completed}</h2>
        <h2 className={styles.fontSemi}>Completed Task</h2>
      </div>
      <div className={`${styles.card} ${styles.bg4}`}>
        <h2 className={styles.fontBold}>{data.taskStats.failed}</h2>
        <h2 className={styles.fontSemi}>Failed Task</h2>
      </div>
    </div>
  );
};

export default TaskStatusList;
