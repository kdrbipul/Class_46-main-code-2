import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Header from "../Shared/Header/Header";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Header />
            }
        ]
    }
])


export default router;