import React from "react";
import TaskList from "../TaskStatus/TaskList";
import TaskStatusList from "../others/TaskStatusList";
import Header from "../others/Header"; 
import styles from "./EmployeeDashboard.module.css";

const EmployeeDashboard = ({ changeUser, employeeId, employees }) => {
  const employee = employees.find((e) => e.id === employeeId);

  if (!employee) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      
      <Header data={employee} changeUser={changeUser} />

      
      <TaskStatusList data={employee} />
      <TaskList data={employee} />
    </div>
  );
};

export default EmployeeDashboard;
