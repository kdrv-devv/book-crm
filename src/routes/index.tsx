import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import { LoginPage } from "../pages/auth";


export const routes = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },
     {
        path:"/login",
        element:<LoginPage/>
    }
])