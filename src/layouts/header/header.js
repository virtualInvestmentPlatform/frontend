import React from 'react';

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="logo.png" alt="Logo" className="header-logo" />
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link">Giriş</a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link">Kayıt Ol</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
