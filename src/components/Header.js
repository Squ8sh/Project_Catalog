import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-menu-container">
        <div className="header-menu size">
          <div className="header-logo">
            <Link to="/" className="logo"><img src="img/logo.svg" /></Link>

          </div>
          <div className="header-contacts">
            <img className="icon-phone" src="img/tel.svg" />
            <div className="text-container">
              <p>+7 (906) 228-13-37</p>
              <p>Пн-Пт с 9:00 до 18:00 (МСК)</p>
            </div>
          </div>
          <div className="header-icons">
            <img className="icon-heart" src="img/heart.svg" />
            <img className="icon-cart" src="img/card.svg" />
          </div>
        </div>
      </div>

      <nav className="header-nav size">
        <ul className="nav-list">
          <li className="nav-element"><Link to="/">Главная</Link></li>
          <li className="nav-element"><Link to="/about">О нас</Link></li>
          <li className="nav-element"><Link to="/sale">Акция</Link></li>
          <li className="nav-element"><Link to="/delivery">Доставка</Link></li>
          <li className="nav-element"><Link to="/partners">Стать партнером</Link></li>
          <li className="nav-element"><Link to="/orders">Где забрать заказ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
