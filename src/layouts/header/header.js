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
                    <li className='mx-2'><a href="#" className='text-decoration-none text-light'>Giriş</a></li>
                    <span className="divider">|</span>
                    <li className='mx-2'><a href="#" className='text-decoration-none text-light'>Kaydol</a></li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-dark menu">
            <div className="menu-items">
                <Link to="/" className="navbar-text">Ana Sayfa</Link>
                <span className="divider">|</span>
                <Link to="borsa" className="navbar-text">Borsa</Link>
                <span className="divider">|</span>
                <Link to="/doviz" className="navbar-text">Döviz</Link>
                <span className="divider">|</span>
                <Link to="/emtia" className="navbar-text">Emtia</Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;
