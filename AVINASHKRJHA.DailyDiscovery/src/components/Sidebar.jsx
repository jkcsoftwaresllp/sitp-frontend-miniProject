import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome, FaHeart, FaMoon, FaSun } from "react-icons/fa";

const Sidebar = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={styles.sidebar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
        end
      >
        <FaHome />
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        <FaHeart />
        Favorites
      </NavLink>
      <div className={styles.spacer} />
      <button
        className={`${styles.themeToggle} ${theme === "dark" ? styles.themeToggleActive : ""}`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
        <span style={{ marginLeft: 8 }}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
      </button>
    </div>
  );
};

export default Sidebar;
