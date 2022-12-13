import React from 'react';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import { Login } from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/static/footer/Footer';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart/Cart';
import ListCourses from './components/courses/listCourses/ListCourses';
import ListCategory from './components/categories/listCategory/ListCategory';
import AddCourses from './components/courses/addCourses/AddCourses';
import DeleteCourses from './components/courses/deleteCourses/DeleteCourses';
import Home from './pages/home/Home';



function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div style={{ minHeight: '71vh' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/courses' element={<ListCourses />} />
          <Route path='/courses/add' element={<AddCourses />} />
          <Route path='/courses/add/:id' element={<AddCourses />} />
          <Route path='/courses/delete' element={<DeleteCourses />} />
          <Route path='/courses/delete:id' element={<DeleteCourses />} />
          <Route path='/categories' element={<ListCategory />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
