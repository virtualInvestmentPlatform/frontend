import React from 'react';
import './forgotPassword.css'
import { Link } from 'react-router-dom';


function ForgotPassword() {
    return (
        <div className="container mt-5">
          <h2 className="text-center">Şifremi Unuttum</h2>

          <form>
            <div className="form-group text-center form-element">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>            
    
            <div className="form-group text-center mt-4 form-element">
              <button type="submit" className="btn btn-success">Şifre Sıfırla</button>
            </div>
          </form>
        </div>
      );
    }

export default ForgotPassword;
