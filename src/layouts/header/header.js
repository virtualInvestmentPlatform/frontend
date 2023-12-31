import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import logo from '../../assets/img/logo.png'
import { useAuth } from '../../context/authContext';
import { getUser } from '../../service/user'; 

function Header() {
    const {token , logout} = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(token) {
            getUser(token).then(response => {
                if(response) {
                    setUser(response.data);
                }
            });
        }
    }, [token]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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
                        <span className="name">{user == null ? "" : user.name} {user == null ? "" : user.surname}</span>
                        <br/>
                        <span className="balance">{user == null ? "" : "Bakiye : " + user.balance} TL</span>
                        <nav className="user-navigation">
                            <Link to="/settings" className="btn btn-link">Ayarlar</Link> |
                            <button onClick={handleLogout} className="btn btn-link">Çıkış</button>
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