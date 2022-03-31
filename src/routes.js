import React from 'react'

import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
import Navbar from './component/Navbar';

export const routes = [
    { path: "/", element: <Login /> },
    { path: "/Signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/Navbar", element: <Navbar /> },

]
