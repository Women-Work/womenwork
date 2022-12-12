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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart/Cart';
import ListCategory from './components/categorys/listCategory/ListCategory';
import ListProduct from './components/products/listProduct/ListProduct';



function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/categorias' element={<ListCategory />} />
        <Route path='/produtos' element={<ListProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
