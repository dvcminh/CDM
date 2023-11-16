import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'
import DashboardItem from '../../../components/DashboardItem'

function CustomerPayment() {

    const paymentItem = [
        {
          img: <img src='https://damme.io/wp-content/uploads/2018/08/lam-the-visa-mastercard-0.png' alt='solar' className='dashboard__item-img'/>,
          article: 'Credit Cards',
          content: 'Produce energy to power your Tesla life',
          button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>Add Card</button>
        },
        {
            img: <img src='https://res.cloudinary.com/droondbdu/image/upload/v1699951017/cash-payment-button-web-template-speech-bubble-banner-label-cash-payment-sign-icon-illustration-vector_wzovut.jpg' alt='solar' className='dashboard__item-img'/>,
            article: 'Cash',
            content: 'Produce energy to power your Tesla life',
            button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>Contact us</button>
        },
        {
            img: <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/9d/11/23/9d1123ee-079c-762d-bdda-ef59f3f6abd9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png' alt='solar' className='dashboard__item-img'/>,
            article: 'VN Pay',
            content: 'Produce energy to power your Tesla life',
            button: <button className='dashboard__item-button' onClick={() => alert('View Solar')}>Link to your account</button>
        }
    ]
    return ( 
        <>
           <div className="container-flex" style={{flexWrap: 'wrap'}}>
                <SideBar/>
                <div>
                    <h1 style={{fontWeight: '500', marginLeft: 40}}>Payment Method</h1>
                    <div style={{marginLeft: 20}} className="container-flex">
                        <DashboardItem data={paymentItem[0]}/>
                        <DashboardItem data={paymentItem[2]}/>
                    </div>

                    <div style={{marginLeft: 20, marginTop: 20}} className="container-flex">
                        <DashboardItem data={paymentItem[1]}/>
                </div>
                </div>
           </div>
        </>
     );
}

export default CustomerPayment;