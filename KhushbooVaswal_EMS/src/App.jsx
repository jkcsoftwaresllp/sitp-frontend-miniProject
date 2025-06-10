import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }

    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    } else if (authData) {
      setEmployees(authData.employees);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const addTaskToEmployee = (employeeId, newTask) => {
    setEmployees((prevEmployees) => {
      const updatedEmployees = prevEmployees.map((emp) => {
        if (emp.id === employeeId) {
          const taskWithId = { ...newTask, id: newTask.id || Date.now() + Math.random() };
          const updatedTasks = [...emp.tasks, taskWithId];

          const updatedTaskStats = { ...emp.taskStats };
          updatedTaskStats.new = (updatedTaskStats.new || 0) + (taskWithId.new ? 1 : 0);
          updatedTaskStats.active = (updatedTaskStats.active || 0) + (taskWithId.active ? 1 : 0);
          updatedTaskStats.completed = (updatedTaskStats.completed || 0) + (taskWithId.completed ? 1 : 0);
          updatedTaskStats.failed = (updatedTaskStats.failed || 0) + (taskWithId.failed ? 1 : 0);

          return {
            ...emp,
            tasks: updatedTasks,
            taskStats: updatedTaskStats,
          };
        }
        return emp;
      });

      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      return updatedEmployees;
    });
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && (
        <AdminDashboard
          changeUser={setUser}
          employees={employees}
          addTaskToEmployee={addTaskToEmployee}
        />
      )}
      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          employeeId={loggedInUserData.id}
          employees={employees} // pass the full list
        />
      )}
    </>
  );
};

export default App;
