import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './Components/LandingPage.js';

function App() {
  const[auth, setAuth] = useState(false);
  const location =useLocation();
  return (
      <Routes>
        <Route path="/Login" element={<Login setAuth={setAuth} />} />
        <Route path="/LandingPage" element={<LandingPage setAuth={setAuth} />} />
        <Route
        path="/"
        element = {
          auth ?(
            <Login setAuth={setAuth} />
          ):(
            <Navigate to="LandingPage" state={{from:location}} replace />
          )
          
        }
        />
      </Routes>
   
  );
}

export default App;
