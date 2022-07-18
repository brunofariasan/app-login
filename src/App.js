import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/login';

const App = () => {
  return ( 
  <BrowserRouter>
    <Routes>
      <Route path="home" element={<Home />}/>
      <Route path="/" element={<Login />}/>
    </Routes>
  </BrowserRouter>
  )

};

export default App;