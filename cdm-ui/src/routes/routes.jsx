import config from '../config';
import CustomerHome from '../pages/CustomerHome/CustomerHome';
import ShopLifeStyle from '../pages/ShopLifeStyle';
import Start from '../pages/Start';
import VehicleModelS from '../pages/VehicleModelS';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

// Public routes
const publicRoutes = [
    { path: config.routes.shoplifestyle, component: ShopLifeStyle },
    { path: config.routes.start, component: Start },
    { path: config.routes.customerhome, component: CustomerHome },
    { path: config.routes.vehicleS, component: VehicleModelS },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };