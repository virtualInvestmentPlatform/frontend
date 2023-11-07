import React from 'react';
import './register.css'
import { Link } from 'react-router-dom';


function Register() {
    return (
        <div className="container mt-5">
          <h2 className="text-center">Kayıt Ol</h2>

          <form>
          <div className="form-group text-center form-element">
              <input type="text" className="form-control" id="name" placeholder="Ad" />
            </div>
            <div className="form-group text-center form-element">
              <input type="text" className="form-control" id="surname" placeholder="Soyad" />
            </div>
            <div className="form-group text-center form-element">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group text-center form-element">
              <input type="password" className="form-control" id="password" placeholder="Şifre" />
            </div>
            <div className="form-group text-center mt-4 form-element">
              <button type="submit" className="btn btn-success">Kayıt Ol</button>
            </div>
          </form>
        </div>
      );
    }

export default Register;
