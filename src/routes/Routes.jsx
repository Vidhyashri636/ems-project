import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Components/Layout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import AddUser from "../Pages/AddUser";
import EditUserDetails from "../Pages/EditUserDetails";
import ViewUserDetails from "../Pages/ViewUserDetails";
import ForgotPassword from "../auth/ForgotPassword";
import ProtectedRoutes from "../Context/ProtectedRoutes";
import PublicRoutes from "../Context/PublicRoutes";

//! routes configaration file
let myRoutes=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            index:true,
            element:<Home/>,
        },
        {
            path:"/auth/login",
            element:(<PublicRoutes><Login/></PublicRoutes>),
        },
        {
            path:"/auth/register",
            element:(<PublicRoutes><Register/></PublicRoutes>),
        },
        {
            path:"/add-user",
            element:(<ProtectedRoutes><AddUser/></ProtectedRoutes>)
        },
        {
            path:"/edit-user",
            element:(<ProtectedRoutes><EditUserDetails/></ProtectedRoutes>)
        },
        {
            path:"/view-user",
            element:(<ProtectedRoutes><ViewUserDetails/></ProtectedRoutes>)
        },
        {
            path:"/auth/forgot-password",
            element:(<PublicRoutes><ForgotPassword/></PublicRoutes>),
        },
        {
            path:"*",
            element:<h1>404! Page Not Found</h1>
        },
      ],
    },
]);
export default myRoutes;