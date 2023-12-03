import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="container mt-5">
          <h2 className="text-center">Giriş</h2>

          <form>
            <div className="form-group text-center form-element">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group text-center form-element">
              <input type="password" className="form-control" id="password" placeholder="Şifre" />
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
        </div>
      );
    }

export default Login;
