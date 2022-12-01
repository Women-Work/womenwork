import React from 'react';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import { Login } from './pages/login/Login';



function App() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
