import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Contact from "../Pages/Contact/Contact";
import Error404 from "../Pages/Error/Error404";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
])

export default Router;