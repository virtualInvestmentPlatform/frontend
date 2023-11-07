import React from 'react';
import './header.css'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <div className='container header'>
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
                <a href="#" className="navbar-text">Ana Sayfa</a>
                <span className="divider">|</span>
                <a href="#" className="navbar-text">Borsa</a>
                <span className="divider">|</span>
                <a href="#" className="navbar-text">Döviz</a>
                <span className="divider">|</span>
                <a href="#" className="navbar-text">Emtia</a>
            </div>
        </nav>
    </div>
  );
}

export default Header;
