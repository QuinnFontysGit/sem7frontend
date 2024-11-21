import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Products from './pages/Products/Products'
import Navbar from './components/Navbar/Navbar'
import Register from './pages/Register/Register'
import getCsrfToken from './api/csrf'
import Account from './pages/Account/Account'

function App() {
  useEffect(()=>{
    getCsrfToken();
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
