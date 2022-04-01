import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import { routes } from './routes';
// import { useRoutes } from 'react-router';
import { useRoutes } from "react-router-dom";
import MyErrorBoundary from './MyErrorBoundary';



function App() {
  const element = useRoutes(routes)
  return (
    <MyErrorBoundary>
      <Navbar />
      {element}
    </MyErrorBoundary>

  );
}

export default App;
