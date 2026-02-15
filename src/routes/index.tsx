import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/auth";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/home/products";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <div>Salom</div>
            },
            {
                path: "/products",
                element: <ProductsPage/>
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />
    }
])

