import React from 'react'
import { useAppSelector } from '../common/hooks'
import { selectToken } from '../redux/tokenSlice'
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/static/footer/Footer';
import Navbar from '../components/static/navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function Router() {
  const token = useAppSelector(selectToken);

  const Routes = () => token && token.length > 0 ? <PrivateRoutes /> : <PublicRoutes />

  return (
    <BrowserRouter>
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
        <Routes />
      </div>
      <Footer />
      {/* <Vlibras forceOnload={true} /> */}
    </BrowserRouter>
  )
}

export default Router