import config from '../config';
import ManagerHome from '../pages/Manager/ManagerHome';
import ManagerVehicleModelS from '../pages/Manager/ManagerVehicle/VehicleModels';
import ManageCustomerPage from '../pages/Manager/ManageCustomer/ManageCustomer';
import ManageStaffPage from '../pages/Manager/ManageStaff/ManageStaff';
import CustomerHome from '../pages/Customer/CustomerHome';
import CustomerOrderHistory from '../pages/Customer/CustomerOrderHistory';
import CustomerPayment from '../pages/Customer/CustomerPayment';
import CustomerProfile from '../pages/Customer/CustomerProflie';
import CustomerReport from '../pages/Customer/CustomerReport';
import ShoppingCart from '../pages/Customer/ShoppingCart/ShoppingCart';
import ShopLifeStyle from '../pages/ShopLifeStyle';
import VehicleModelS from '../pages/VehicleModelS';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import loginregisLayout from '../layouts/loginregisLayout';
import DefaultLayout from '../layouts/defaultLayout'
import LandingPage from '../pages/LandingPage/LandingPage'
import landingLayout from '../layouts/landingLayout';
import StaffHome from '../pages/Staff/StaffHome';
import staffLayout from '../layouts/staffLayout';
import ManagerLayout from '../layouts/managerLayout/';
// Public routes
const publicRoutes = [
    { path: config.routes.shoplifestyle, component: ShopLifeStyle, layout: DefaultLayout },
    { path: config.routes.managerhome, component: ManagerHome, layout: ManagerLayout},
    { path: config.routes.managervehicleS, component: ManagerVehicleModelS, layout: ManagerLayout },
    { path: config.routes.managerhome, component: ManagerHome, layout: DefaultLayout},
    { path: config.routes.managecustomer, component: ManageCustomerPage, layout: DefaultLayout},
    { path: config.routes.managestaff, component: ManageStaffPage, layout: DefaultLayout},
    { path: config.routes.customerhome, component: CustomerHome, layout: DefaultLayout},
    { path: config.routes.customerprofile, component: CustomerProfile , layout: DefaultLayout},
    { path: config.routes.customerpayment, component: CustomerPayment, layout: DefaultLayout },
    { path: config.routes.customerorderhis, component: CustomerOrderHistory, layout: DefaultLayout },
    { path: config.routes.customerreport, component: CustomerReport, layout: DefaultLayout} ,
    { path: config.routes.shoppingcart, component: ShoppingCart, layout: DefaultLayout },
    { path: config.routes.vehicleS, component: VehicleModelS, layout: DefaultLayout },
    { path: config.routes.login, component: Login, layout: loginregisLayout },
    { path: config.routes.register, component: Register, layout: loginregisLayout },
    { path: config.routes.start, component: LandingPage, layout: landingLayout },
    { path: config.routes.staffhome, component: StaffHome, layout: staffLayout }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };