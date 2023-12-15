import React from 'react';
import { Link } from "react-router-dom";
import './header.css'
import logo from '../../assets/img/logo.png'
import { useAuth } from '../../context/authContext';

function Header() {
    const {token} = useAuth();
    return (
        <header className='container header'>
            <nav class="navbar navbar-inverse head">
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img class="app-logo" src={logo}/>
                        </a>
                    </div>
                    {
                    (token) 
                    ? 
                    <div className="user-panel text-center">
                        <span className="name">Harun Eren Özkaya</span>
                        <nav className="user-navigation">
                            <Link to="/settings" className="btn btn-link">Ayarlar</Link> |
                            <Link to="/logout" className="btn btn-link">Çıkış</Link>
                        </nav>
                    </div>
                    :
                    <ul class="nav navbar-right">
                        <li className='mx-2'>
                            <Link to="/login" className="text-decoration-none text-light">Giriş</Link>
                        </li>
                        <span className="divider">|</span>
                        <li className='mx-2'>
                            <Link to="/register" className="text-decoration-none text-light">Kaydol</Link>
                        </li>
                    </ul>
                    }
                    
                </div>
            </nav>
            <nav class="navbar navbar-dark menu">
                <div className="menu-items">
                    <Link to="/" className="navbar-text">Ana Sayfa</Link>
                    <span className="divider">|</span>
                    <Link to="/stock" className="navbar-text">Borsa</Link>
                    <span className="divider">|</span>
                    <Link to="/currency" className="navbar-text">Döviz</Link>
                    <span className="divider">|</span>
                    <Link to="/commodity" className="navbar-text">Emtia</Link>
                    {(token) ? 
                    <div className='my-investment-link'>   
                        <span className="divider">|</span>
                        <Link to="/my-investments" className="navbar-text">Yatırımlarım</Link>
                    </div>
                        : <div></div> 
                    } 
                </div>
            </nav>
        </header>
    );
}

export default Header;
