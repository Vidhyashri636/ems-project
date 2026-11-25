import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css";
import { RouterProvider } from 'react-router-dom';
import myRoutes from './routes/routes';
import AuthContextApi from './Context/AuthContextApi';
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <AuthContextApi>
         <RouterProvider router={myRoutes}/>
    </AuthContextApi>
    </>
   
);