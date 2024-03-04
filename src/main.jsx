import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login.jsx';
import Register from './Register.jsx';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/configStore.js';
import { useEffect } from "react";
import { handleLogin, handleUserData } from './redux/actions/action.js';

const Root = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    const isTokenValid = async () => {
      if (JSON.parse(localStorage.getItem('token'))) {
        let { token } = JSON.parse(localStorage.getItem('token'));
        try {
          let res = await axios.get('http://localhost:8000/token/', {
            headers: {
              "authorization": "Bearer" + " " + token
            }
          })
          if (res.status === 200) {
            dispatch(handleUserData(res.data))
            dispatch(handleLogin(true));
          } else {
            dispatch(handleLogin(false));
          }
        } catch (error) {
          console.log(error, "errer")
        }

      }
    }
    isTokenValid()
  }, [])

  return <Routes>
    <Route path='/' Component={App} />
    <Route path='/login' Component={Login} />
    <Route path='/register' Component={Register} />
  </Routes>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
)
