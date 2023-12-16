import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import {loginUser} from '../../service/auth';
import { useAuth } from '../../context/authContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await loginUser(email, password);

      if (userData) {
        setLoginStatus('Giriş başarılı');
        login(userData);
        
        //Redirect to investments
        setTimeout(() => {
          navigate("/my-investments");
        }, 1500);

      } else {
        setLoginStatus('Email veya şifre hatalı!');
      }
    } catch (error) {
      setLoginStatus('Email veya şifre hatalı!');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Giriş</h2>

      <form onSubmit={handleLogin}>
        <div className="form-group text-center form-element">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group text-center form-element">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex-container forgot-password-wrapper'>
          <div className="text-right form-element">
            <Link to="/forgot-password">Şifremi Unuttum</Link>
          </div>
        </div>

        <div className="form-group text-center mt-4 form-element">
          <button type="submit" className="btn btn-success">Giriş</button>
        </div>
      </form>
      {loginStatus && (
        <div className='alert-wrapper text-center'>
          <div className={`alert ${loginStatus.includes('başarılı') ? 'alert-success' : 'alert-danger'} mt-3`}>
            {loginStatus}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
