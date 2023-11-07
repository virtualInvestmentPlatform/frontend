import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer/footer';
import Header from './layouts/header/header';
import Home from './pages/home/home'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header/>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;
