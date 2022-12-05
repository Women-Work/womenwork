import React from 'react';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import { Login } from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './pages/courses/Courses';
import Footer from './components/static/footer/Footer';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
    // <Login />
  );
}

export default App;
