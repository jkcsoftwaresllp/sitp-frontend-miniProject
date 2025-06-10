import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";


const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!props.data) {
      setUsername("Admin");
    } else {
      setUsername(props.data.firstname || "Employee");
    }
  }, [props.data]);


  const logOutUser = () => { 
      localStorage.setItem('loggedInUser','')
      props.changeUser('');
   }
  return (
    <div className={styles.headerContainer}>
  <h1 className={styles.welcomeText}>
    Welcome <br />
    <span className={styles.username}> {username} 🙏</span>
  </h1>
  <button onClick={logOutUser} className={styles.logoutButton}>Log Out</button>
</div>

  );
};

export default Header;
