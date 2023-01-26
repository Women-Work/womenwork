
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ListCourses from '../components/courses/listCourses/ListCourses';
import Search from '../components/courses/search/Search';
import ShowCourse from '../components/courses/showCourse/ShowCourse';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import Signup from '../pages/signup/Signup';
import Home from '../pages/home/Home';
import { Login } from '../pages/login/Login';

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/courses' element={<ListCourses />} />
      <Route path='/courses/:id' element={<ShowCourse />} />
      <Route path='/search' element={<Search />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PublicRoutes