import React from 'react'
import { useRoutes } from "react-router-dom";
import { Footer } from './commponent/Footer';
import routes from './router';
import { Provider } from 'react-redux';
import './index.css'
import store from './store';



const App = () => {
  return (
    <div className="contain">
      <Provider store={store}>
        {useRoutes(routes)}
        <Footer></Footer>
      </Provider>

    </div>


  )
}

export default App