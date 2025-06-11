import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg.jpeg';
import cart_icon from '../../assets/icon.png';

const Navbar = ({ cartItems = [], removeFromCart }) => {
  const [menu, setMenu] = useState("home");
  const [showCart, setShowCart] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="60px" />
        <p>Velvora</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>Home {menu === "home" && <hr />}</li>
        <li onClick={() => setMenu("men")}>Men {menu === "men" && <hr />}</li>
        <li onClick={() => setMenu("women")}>Women {menu === "women" && <hr />}</li>
        <li onClick={() => setMenu("others")}>Others {menu === "others" && <hr />}</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <div className="cart-container" onClick={() => setShowCart(!showCart)}>
          <img src={cart_icon} alt="Cart" height="35px" />
          {/* <div className="nav-cart-count">{cartItems.length}</div> */}
        </div>
      </div>

      {showCart && (
        <div className="cart-dropdown">
          <h4>Cart Items</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.title.slice(0, 20)} - ${item.price}
                  <button onClick={() => removeFromCart(item.id)}>❌</button>
                </li>
              ))}
            </ul>
          )}
          <p>Total: ${total}</p>
        </div>
      )}
    </div>
  );
};
export default Navbar;

