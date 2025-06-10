# Employee Management System (EMS)

## Project Overview

The **Employee Management System (EMS)** is a React-based web application designed to manage tasks and users within an organization. It supports role-based access for Admin and Employee users, enabling smooth task assignment, tracking, and status updates.

---

## Features

- **React Frontend** with modular components  
- **CSS Modules** for scoped, maintainable styling (`.module.css`)  
- **LocalStorage** used for persistent login sessions and data storage  
- **Role-Based Login** system for Admin and Employee users  

### Admin Dashboard
- Create and assign tasks to employees  
- View task status: Pending, Accepted, Failed, Completed  

### Employee Dashboard
- View assigned tasks  
- Update task status: Accept, Fail, Complete  

- Responsive UI with flexible layouts

---

## Technologies Used

- React (Functional Components, Hooks)  
- CSS Modules for component-level styling  
- LocalStorage for session and data persistence  
- JavaScript ES6+ (Modules, async/await, arrow functions)  

---

## Usage

### Login
- Use predefined credentials for Admin or Employee.  
- Login data is stored in `localStorage` to maintain session.

### Admin
- Access Admin Dashboard to create new tasks.  
- Assign tasks to employees.  
- View all task statuses.

### Employee
- View assigned tasks in Employee Dashboard.  
- Update task status: Accept, Fail, or Mark Completed.

---

## Key Functionalities

### Login Flow
- User selects role (Admin or Employee) and logs in.  
- Session info saved in `localStorage` to keep user logged in across page refreshes.  
- Redirects user to the appropriate dashboard based on role.

### Admin Dashboard
- Form to create new tasks with title, description, and assignee selection.  
- Task list displays all tasks with their statuses.  
- Admin can monitor progress in real-time.

### Employee Dashboard
- Displays tasks assigned to the logged-in employee.  
- Options to update task status: Accept, Fail, or Completed.  
- Status updates persist in `localStorage`.

---

## How Data is Managed

- Users and tasks data are stored and managed locally using browser's `localStorage`.  
- On login, user details are saved to `localStorage` for persistent sessions.  
- Task state updates (accept, fail, complete) update the `localStorage` data accordingly.

---

## Future Improvements

- Integrate backend API for real database persistence.  
- Add user registration and password encryption.  
- Improve UI/UX with advanced styling and animations.  
- Add notifications for task updates.

---

## Contact

For questions or contributions, please contact:  
**Your Name** – khushboovaswal321@gmail.com
