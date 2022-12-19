import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/static/navbar/Navbar';
import { Login } from './pages/login/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/static/footer/Footer';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import NotFound from './pages/notFound/NotFound';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from './pages/Cart/Cart';
import ListCourses from './components/courses/listCourses/ListCourses';
import ListCategory from './components/categories/listCategory/ListCategory';
import AddCourses from './components/courses/addCourses/AddCourses';
import DeleteCourses from './components/courses/deleteCourses/DeleteCourses';
import Home from './pages/home/Home';
import AddCategory from './components/categories/addCategory/AddCategory';
import DeleteCategory from './components/categories/deleteCategory/DeleteCategory';
import Search from './components/courses/search/Search';
import useLocalStorage from 'react-use-localstorage';
import Vlibras from '@djpfs/react-vlibras';



function App() {
  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
      if (token) {
          const tokenData = JSON.parse(atob(token.split('.')[1]));
          const expires = new Date(tokenData.exp * 1000);
          if (expires < new Date()) {
              setToken('');
              toast.error('Sessão expirada.');
          }
      }
  }, [token]);
  
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
      
      <div style={{minHeight: 'calc(100vh - 100px)'}} > 
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/courses' element={<ListCourses />} />
        <Route path='/courses/:id' element={<ListCourses />} />
        <Route path='/courses/add' element={<AddCourses />} />
        <Route path='/courses/add/:id' element={<AddCourses />} />
        <Route path='/courses/delete' element={<DeleteCourses />} />
        <Route path='/courses/delete/:id' element={<DeleteCourses />} />
        <Route path='/categories' element={<ListCategory />} />
        <Route path='/categories/add' element={<AddCategory />} />
        <Route path='/categories/add/:id' element={<AddCategory />} />
        <Route path='/categories/delete' element={<DeleteCategory />} />
        <Route path='/categories/delete/:id' element={<DeleteCategory />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      <Vlibras forceOnload={true} />
    </Router>
  );
}

export default App;
