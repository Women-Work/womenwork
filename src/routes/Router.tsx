import "react-toastify/dist/ReactToastify.css";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../common/hooks";
import Footer from "../components/static/footer/Footer";
import Navbar from "../components/static/navbar/Navbar";
import { resetToken, selectToken } from "../redux/tokenSlice";
import { logout } from "../redux/userSlice";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

function Router() {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decodedJwt = parseJwt(token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        dispatch(resetToken());
        dispatch(logout());
        navigate("/login");
      }
    }
  }, [dispatch, navigate, token]);

  const Routes = () =>
    token && token.length > 0 ? <PrivateRoutes /> : <PublicRoutes />;

  return (
    <>
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

      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default Router;
