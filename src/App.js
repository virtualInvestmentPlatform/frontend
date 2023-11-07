import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer/footer';
import Header from './layouts/header/header';
import Home from './pages/home/home'
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgotPassword/forgotPassword';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/forgotPassword" element={<ForgotPassword/>} />
            </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
