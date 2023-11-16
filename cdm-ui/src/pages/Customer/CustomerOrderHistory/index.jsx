import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'
import DashboardItem from '../../../components/DashboardItem'

function CustomerOrderHistory() {

    const paymentItem = [
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/mens_plaid_tee_transparent_fb08751a78992.png' alt='solar' className='dashboard__item-img'/>,
          article: 'Current Transactions',
          content: 'Follow all your current transactions',
          button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>View</button>
        },
        {
            img: <img src='https://res.cloudinary.com/droondbdu/image/upload/v1699951017/cash-payment-button-web-template-speech-bubble-banner-label-cash-payment-sign-icon-illustration-vector_wzovut.jpg' alt='solar' className='dashboard__item-img'/>,
            article: 'History transactions',
            content: 'View all your shop transaction',
            button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>View</button>
        },
    ]
    return ( 
        <>
           <div className="container-flex" style={{flexWrap: 'wrap'}}>
                <SideBar/>
                <div>
                    <h1 style={{fontWeight: '500', marginLeft: 40}}>Order History</h1>
                    <div style={{marginLeft: 20}} className="container-flex">
                        <DashboardItem data={paymentItem[0]}/>
                        <DashboardItem data={paymentItem[1]}/>
                    </div>
                </div>
           </div>
        </>
     );
}

export default CustomerOrderHistory;