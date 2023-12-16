import React, { useState } from 'react';
import './register.css';
import {registerUser} from '../../service/auth';

function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);


  const handleRegister = async (e) => {
    e.preventDefault(); 
    
    const response = await registerUser(name, surname, email, password);
    if (response != null && response && response.status === 200) {
      setRegistrationStatus('Başarıyla kayıt olundu!');
    } else {
      setRegistrationStatus('Kayıt olurken bir sorun oldu. Lütfen tekrar deneyiniz.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Kayıt Ol</h2>

      <form>
        <div className="form-group text-center form-element">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group text-center form-element">
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Soyad"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
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
        <div className="form-group text-center mt-4 form-element">
          <button type="submit" className="btn btn-success" onClick={handleRegister}>
            Kayıt Ol
          </button>
        </div>
        {registrationStatus && (
        <div className={`alert ${registrationStatus === 'Başarıyla kayıt olundu!' ? 'alert-success' : 'alert-danger'} mt-3 text-center`}>
          {registrationStatus}
        </div>
        )}
      </form>
    </div>
  );
}

export default Register;
