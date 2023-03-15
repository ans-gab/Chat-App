import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Createimg from "../pages/Createimg";
import Mine from "../pages/Mine";
import Login from "../pages/Login";
import Register from "../pages/Register";

// 注意！！！ element 的首字母一定要是小写，否则不会生效
const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "createimg",
    element: <Createimg />
  },
  {
    path: "question",
    element: <Question />
  },
  {
    path: "mine",
    element: <Mine />
  },
  {
    path: "login",
    element: <Login />
  },{
    path:"sign-up",
    element:<Register/>
  }
]

export default routes