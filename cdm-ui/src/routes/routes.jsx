import config from '../config';
import CustomerHome from '../pages/Customer/CustomerHome';
import CustomerOrderHistory from '../pages/Customer/CustomerOrderHistory';
import CustomerPayment from '../pages/Customer/CustomerPayment';
import CustomerProfile from '../pages/Customer/CustomerProflie';
import ShopLifeStyle from '../pages/ShopLifeStyle';
import VehicleModelS from '../pages/VehicleModelS';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import loginregisLayout from '../layouts/loginregisLayout';
import DefaultLayout from '../layouts/defaultLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import landingLayout from '../layouts/landingLayout';
// Public routes
const publicRoutes = [
    { path: config.routes.shoplifestyle, component: ShopLifeStyle, layout: DefaultLayout },
    { path: config.routes.customerhome, component: CustomerHome, layout: DefaultLayout},
    { path: config.routes.customerprofile, component: CustomerProfile , layout: DefaultLayout},
    { path: config.routes.customerpayment, component: CustomerPayment, layout: DefaultLayout },
    { path: config.routes.customerorderhis, component: CustomerOrderHistory, layout: DefaultLayout },
    { path: config.routes.vehicleS, component: VehicleModelS, layout: DefaultLayout },
    { path: config.routes.login, component: Login, layout: loginregisLayout },
    { path: config.routes.register, component: Register, layout: loginregisLayout },
    { path: config.routes.start, component: LandingPage, layout: landingLayout }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };