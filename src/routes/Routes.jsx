import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;