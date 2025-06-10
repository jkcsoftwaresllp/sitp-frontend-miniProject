import React from "react";
import styles from "./TaskList.module.css";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log('TaskList rendering tasks:', data.tasks);

  return (
    <div className={styles.container}>
      {data.tasks.map((task) => {
  if (task.active) return  <AcceptTask key={task.id} data={task} />
  if (task.new) return <NewTask key={task.id} data={task} />;
  if (task.completed) return <CompleteTask key={task.id} data={task} />;
  if (task.failed) return <FailedTask key={task.id} data={task} />;
  return null;
})}
    </div>
  );
};

export default TaskList;
