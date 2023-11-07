import React from 'react';
import { Link } from "react-router-dom";
import './header.css'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <header className='container header'>
        <nav class="navbar navbar-inverse head">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img class="app-logo" src={logo}/>
                    </a>
                </div>
                <ul class="nav navbar-right">
                    <li className='mx-2'>
                        <Link to="/login" className="text-decoration-none text-light">Giriş</Link>
                    </li>
                    <span className="divider">|</span>
                    <li className='mx-2'>
                        <Link to="/register" className="text-decoration-none text-light">Kaydol</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-dark menu">
            <div className="menu-items">
                <Link to="/" className="navbar-text">Ana Sayfa</Link>
                <span className="divider">|</span>
                <Link to="stock" className="navbar-text">Borsa</Link>
                <span className="divider">|</span>
                <Link to="/exchange" className="navbar-text">Döviz</Link>
                <span className="divider">|</span>
                <Link to="/commodity" className="navbar-text">Emtia</Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;
