import React from 'react'
import { useRoutes } from "react-router-dom";
import { Footer } from './commponent/Footer';
import routes from './router';
import './index.css'



const App = () => {
  return (
    <div className="contain">
      {useRoutes(routes)}
      <Footer></Footer>
    </div>


  )
}

export default App