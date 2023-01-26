import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AddCategory from '../components/categories/addCategory/AddCategory';
import DeleteCategory from '../components/categories/deleteCategory/DeleteCategory';
import ListCategory from '../components/categories/listCategory/ListCategory';
import AddCourses from '../components/courses/addCourses/AddCourses';
import DeleteCourses from '../components/courses/deleteCourses/DeleteCourses';
import ListCourses from '../components/courses/listCourses/ListCourses';
import MyCourses from '../components/courses/myCourses/MyCourses';
import Search from '../components/courses/search/Search';
import ShowCourse from '../components/courses/showCourse/ShowCourse';
import About from '../pages/about/About';
import NotFound from '../pages/notFound/NotFound';
import Home from '../pages/home/Home';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/courses' element={<ListCourses />} />
      <Route path='/courses/:id' element={<ShowCourse />} />
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
      <Route path='/user/courses' element={<MyCourses />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoutes