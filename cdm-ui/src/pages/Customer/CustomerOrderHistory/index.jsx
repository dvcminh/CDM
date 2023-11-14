import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'

function CustomerOrderHistory() {
    return ( 
        <>
           <div className="container-flex">
                <SideBar/>
                <div>
                    <h1 style={{fontWeight: '500', marginLeft: 40}}>Order History</h1>
                    
                </div>
           </div>
        </>
     );
    }
export default CustomerOrderHistory;