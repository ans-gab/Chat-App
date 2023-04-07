import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Createimg from "../pages/Createimg";
import Mine from "../pages/Mine";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Example from "../pages/Examples";
import Instructions from "../pages/Instructions";
import Suggest from "../pages/Suggest";
import Log from "../pages/Log";

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
  }, {
    path: "sign-up",
    element: <Register />
  }, {
    path: "example",
    element: <Example />
  }, {
    path: "/instruction",
    element: <Instructions />
  },
  {
    path: "/log",
    element: <Log />
  },
  {
    path: "/suggest",
    element: <Suggest />
  }

]

export default routes