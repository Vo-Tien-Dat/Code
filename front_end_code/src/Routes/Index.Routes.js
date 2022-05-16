
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import Problems from '../Pages/Problems/Problems';
const IndexRoutes = [
    {
        path: '/login',
        main: <Login />
    },
    {
        path: '/problem',
        main: <Problems />
    },
    {
        path: '/',
        main: <Home />
    }
]

export default IndexRoutes;