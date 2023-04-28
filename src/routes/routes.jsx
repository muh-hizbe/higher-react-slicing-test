import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Error404Page from "../pages/Error404Page";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <Error404Page />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
]);