
const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page UI.",
        dueDate: "2025-06-15",
        category: "design",
        active: true,
        completed: false,
        failed: false,
        new: true
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve issue with navigation not collapsing on mobile.",
        dueDate: "2025-06-10",
        category: "dev",
        active: true,
        completed: false,
        failed: false,
        new: false
      },
      {
        title: "Update Icons",
        description: "Replace old icons with new ones in dashboard.",
        dueDate: "2025-06-20",
        category: "design",
        active: false,
        completed: true,
        failed: false,
        new: false
      }
    ],
    taskStats: {
      active: 2,
      completed: 1,
      failed: 0,
      new: 1
    }
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Integrate API",
        description: "Integrate new payment API into checkout flow.",
        dueDate: "2025-06-18",
        category: "dev",
        active: true,
        completed: false,
        failed: false,
        new: true
      },
      {
        title: "Write Unit Tests",
        description: "Write test cases for authentication module.",
        dueDate: "2025-06-22",
        category: "qa",
        active: false,
        completed: true,
        failed: false,
        new: false
      },
      {
        title: "Fix Memory Leak",
        description: "Fix memory leak found in production logs.",
        dueDate: "2025-06-25",
        category: "dev",
        active: true,
        completed: false,
        failed: false,
        new: false
      },
      {
        title: "UI Polish",
        description: "Improve visual alignment of form elements.",
        dueDate: "2025-06-19",
        category: "design",
        active: false,
        completed: false,
        failed: true,
        new: false
      }
    ],
    taskStats: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    }
  },
  {
    id: 3,
    firstname: "Rohan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Document API",
        description: "Create Postman documentation for endpoints.",
        dueDate: "2025-06-12",
        category: "docs",
        active: true,
        completed: false,
        failed: false,
        new: true
      },
      {
        title: "Optimize Images",
        description: "Compress and convert images for web.",
        dueDate: "2025-06-14",
        category: "design",
        active: false,
        completed: true,
        failed: false,
        new: false
      },
      {
        title: "Security Review",
        description: "Conduct a review of the login security system.",
        dueDate: "2025-06-30",
        category: "security",
        active: true,
        completed: false,
        failed: false,
        new: true
      }
    ],
    taskStats: {
      active: 2,
      completed: 1,
      failed: 0,
      new: 2
    }
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Setup CI/CD",
        description: "Implement GitHub Actions for deployment.",
        dueDate: "2025-06-28",
        category: "devops",
        active: true,
        completed: false,
        failed: false,
        new: true
      },
      {
        title: "Browser Testing",
        description: "Test application on multiple browsers.",
        dueDate: "2025-06-11",
        category: "qa",
        active: false,
        completed: true,
        failed: false,
        new: false
      },
      {
        title: "Style Footer",
        description: "Update footer to match new design theme.",
        dueDate: "2025-06-13",
        category: "design",
        active: false,
        completed: false,
        failed: true,
        new: false
      }
    ],
    taskStats: {
      active: 1,
      completed: 1,
      failed: 1,
      new: 1
    }
  },
  {
    id: 5,
    firstname: "Kunal",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Dashboard UI",
        description: "Design dashboard layout and cards.",
        dueDate: "2025-06-17",
        category: "design",
        active: true,
        completed: false,
        failed: false,
        new: true
      },
      {
        title: "Write API Docs",
        description: "Write markdown documentation for backend APIs.",
        dueDate: "2025-06-15",
        category: "docs",
        active: false,
        completed: true,
        failed: false,
        new: false
      },
      {
        title: "Add Form Validation",
        description: "Implement client-side validation in forms.",
        dueDate: "2025-06-19",
        category: "dev",
        active: true,
        completed: false,
        failed: false,
        new: false
      },
      {
        title: "Refactor Code",
        description: "Clean up unused code and reorganize components.",
        dueDate: "2025-06-21",
        category: "dev",
        active: false,
        completed: false,
        failed: true,
        new: false
      }
    ],
    taskStats: {
      active: 2,
      completed: 1,
      failed: 1,
      new: 1
    }
  }
];

const admin = [
  {
    id: 101,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage =()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin =JSON.parse(localStorage.getItem("admin"));
    return {employees,admin}
}