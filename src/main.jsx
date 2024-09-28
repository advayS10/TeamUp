import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import Event from './pages/Event.jsx'
import AddEvent from './pages/AddEvent.jsx'
import EventPage from './pages/EventPage.jsx'
import Sports from './pages/Sports.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/sports',
        element: <Sports/>
      },
      {
        path: '/events',
        element: <Event/>,
      },
      {
        path: '/events/:id',
        element: <EventPage />
      },
      {
        path: '/eventform',
        element: <AddEvent/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
