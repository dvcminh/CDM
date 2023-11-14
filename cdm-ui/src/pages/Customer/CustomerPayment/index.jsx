import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'


function CustomerPayment() {
    return ( 
        <>
           <div className="container-flex">
                <SideBar/>
                <div>
                    <h1 style={{fontWeight: '500', marginLeft: 40}}>Payment Method</h1>
                    
                </div>
           </div>
        </>
     );
}

export default CustomerPayment;