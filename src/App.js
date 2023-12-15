import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer/footer';
import Header from './layouts/header/header';
import Home from './pages/home/home'
import Login from './pages/login/login';
import Register from './pages/register/register';
import ForgotPassword from './pages/forgotPassword/forgotPassword';
import AllCurrencies from './pages/allCurrencies/allCurrencies';
import AllStocks from './pages/allStocks/allStocks';
import AllCommodity from './pages/allCommodity/allCommodity';
import Currency from './pages/currency/currency'
import Stock from './pages/stock/stock'
import Commodity from './pages/commodity/commodity'
import MyInvestments from './pages/myInvestments/myInvestments';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <div>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="/stock" element={<AllStocks/>} />
                <Route path="/currency" element={<AllCurrencies/>} />
                <Route path="/commodity" element={<AllCommodity/>} />
                <Route path="/currency/:currencyName" element={<Currency/>} />
                <Route path="/stock/:stockName" element={<Stock/>} />
                <Route path="/commodity/:commodityName" element={<Commodity/>} />
                <Route path="/my-investments" element={<MyInvestments/>} />
              </Routes>
            <Footer/>
          </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
