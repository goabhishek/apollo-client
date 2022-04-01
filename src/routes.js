import React from 'react'

import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import Navbar from './component/Navbar';
import ErrorPage from './component/ErrorPage'
import Home from './component/Home'

export const routes = [
    { path: '/', element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/Navbar", element: <Navbar /> },
    { path: '*', element: < ErrorPage /> }

]
