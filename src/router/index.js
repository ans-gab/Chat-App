import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Question from "../pages/Question";
import Createimg from "../pages/Createimg";
import Mine from "../pages/Mine";

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
  }
]

export default routes