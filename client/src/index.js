import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import app from './App';
import { RouterProvider } from "react-router-dom"
import 'antd/dist/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={app} />
  </React.StrictMode>
);

