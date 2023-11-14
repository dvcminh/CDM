import config from '../config';
import CustomerHome from '../pages/Customer/CustomerHome';
import CustomerOrderHistory from '../pages/Customer/CustomerOrderHistory';
import CustomerPayment from '../pages/Customer/CustomerPayment';
import CustomerProfile from '../pages/Customer/CustomerProflie';
import ShopLifeStyle from '../pages/ShopLifeStyle';
import Start from '../pages/Start';
import VehicleModelS from '../pages/VehicleModelS';

// Public routes
const publicRoutes = [
    { path: config.routes.shoplifestyle, component: ShopLifeStyle },
    { path: config.routes.start, component: Start },
    { path: config.routes.customerhome, component: CustomerHome },
    { path: config.routes.customerprofile, component: CustomerProfile },
    { path: config.routes.customerpayment, component: CustomerPayment },
    { path: config.routes.customerorderhis, component: CustomerOrderHistory },
    { path: config.routes.vehicleS, component: VehicleModelS }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };