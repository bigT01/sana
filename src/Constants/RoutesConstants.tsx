import App from "../App";
import Authorization from "../Pages/Authorization";
import Dashboard from "../Pages/Dashboard";



const routesConstants = [
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/authorization',
        element: <Authorization/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
]

export { routesConstants }
