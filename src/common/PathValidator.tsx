import React, { useEffect } from 'react'
import { useAppSelector } from './hooks';
import { selectToken } from '../redux/tokenSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function PathValidator() {  
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();
  const privateRoutes = ['/courses/add', '/courses/delete', '/categories/add', '/categories/delete', '/user', '/user/courses'];
  const publicRoutes = ['/login', '/signup'];

  useEffect(() => {
    const path = window.location.pathname;
    if(token === '' && privateRoutes.includes(path)){
      toast.error("Você precisa estar logada para acessar essa página.");
      navigate("/login");
    }else if(token !== '' && publicRoutes.includes(path)){
      navigate("/home");
    }
  }, []);

  return (
    <>
      
    </>
  )
}

export default PathValidator