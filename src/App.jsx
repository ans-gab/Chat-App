import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Footer } from './commponent/Footer'
import Header from './commponent/Header'
import routes from './router'
import { Provider } from 'react-redux'
import './index.css'
import store from './store'
import { ConfigProvider } from 'antd'

const App = () => {
  return (
    <div className="contain">
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: { colorPrimary: '#00adae' },
            components: {
              Radio: {
                colorPrimary: '#00adae'
              },
              Input: {
                colorPrimary: '#00adae'
              }
            }
          }}
        >
          <Header></Header>
          {useRoutes(routes)}
          <Footer></Footer>
        </ConfigProvider>
      </Provider>
    </div>
  )
}

export default App
