import React from "react";
import { Routes, Route } from "react-router-dom";
//import { authRoutes, publicRoutes } from "../routes";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import Shop from "../pages/Shop";
import Basket from "../pages/Basket";
import Admin from "../pages/Admin";
import Auth from "../pages/Auth";
import DevicePage from "../pages/DevicePage";
import { useContext } from "react";
import { Context } from "../index";

export default function AppRouter() {
  const { user } = useContext(Context);

  // console.log("=======>", user);

  // return (
  //   <Routes>
  //     {user.isAuth &&
  //       authRoutes.map(({ path, Component }) => (
  //         <Route key={path} path={path} element={Component} />
  //       ))}
  //     ;
  //     {publicRoutes.map(({ path, Component }) => (
  //       <Route key={path} path={path} element={Component} />
  //     ))}
  //   </Routes>
  // );
  //}

  if (!user.isAuth) {
    return (
      <Routes>
        <Route path={SHOP_ROUTE} element={<Shop />} />
        <Route path={LOGIN_ROUTE} element={<Auth />} />
        <Route path={REGISTRATION_ROUTE} element={<Auth />} />
        <Route path={DEVICE_ROUTE} element={<DevicePage />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path={SHOP_ROUTE} element={<Shop />} />
        <Route path={LOGIN_ROUTE} element={<Auth />} />
        <Route path={REGISTRATION_ROUTE} element={<Auth />} />
        <Route path={DEVICE_ROUTE} element={<DevicePage />} />
        <Route path={BASKET_ROUTE} element={<Basket />} />
        <Route path={ADMIN_ROUTE} element={<Admin />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    );
  }
}
