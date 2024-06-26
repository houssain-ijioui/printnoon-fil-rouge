import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Conceptions from './pages/Conceptions.jsx'
import Commandes from './pages/Commandes.jsx'
import store from './store/store.js';
import { Provider } from 'react-redux'
import Profile from './pages/Profile.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/conceptions' element={<Conceptions />} />
      <Route path='/commandes' element={<Commandes />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
)
