import Header from "../layouts/Header";
import Dashboard from "../pages/Dashboard";
import RedirectIfAuthenticated from '../middlewares/RedirectIfAuthenticated'
import Login from "../pages/Login";
import Todos from "../pages/Todos";
import RedirectUnlessAuthenticated from "../middlewares/RedirectUnlessAuthenticated";

export const routesMap = [
    {path: '*',component : Login , exact: true , layout: Header , middleware: RedirectIfAuthenticated },
    {path: '/dashboard', component: Dashboard, exact: true, layout: Header, middleware : RedirectIfAuthenticated},
    {path: '/login', component: Login, exact: true, layout: Header, middleware : RedirectIfAuthenticated},
    {path: '/todos',component : Todos , exact: true , layout: Header , middleware: RedirectUnlessAuthenticated }

]
