import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'
import DashboardItem from '../../../components/DashboardItem'
import { useState } from "react";
import Modal from "../../../components/Modal";

function CustomerPayment() {
    const [modalOpen, setModalOpen] = useState(false);

    const paymentItem = [
        {
          img: <img src='https://damme.io/wp-content/uploads/2018/08/lam-the-visa-mastercard-0.png' alt='solar' className='dashboard__item-img'/>,
          article: 'Credit Cards',
          content: 'Produce energy to power your Tesla life',
          button: <button className='dashboard__item-button' onClick={() => {setModalOpen(true);}}>Add Card</button>
        },
        {
            img: <img src='https://res.cloudinary.com/droondbdu/image/upload/v1699951017/cash-payment-button-web-template-speech-bubble-banner-label-cash-payment-sign-icon-illustration-vector_wzovut.jpg' alt='solar' className='dashboard__item-img'/>,
            article: 'Cash',
            content: 'Produce energy to power your Tesla life',
            button: <button className='dashboard__item-button' onClick={() => {setModalOpen(true);}}>Contact us</button>
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
           <div className="flex">
           {modalOpen && <Modal setOpenModal={setModalOpen} />}

                <SideBar/>
                <div className="ml-4">
                    <h1 className='font-medium text-3xl mt-16 ml-4'>Payment Method</h1>
                    <div className="flex mt-4">
                        <DashboardItem data={paymentItem[0]}/>
                        <DashboardItem data={paymentItem[2]}/>
                    </div>

                </div>
           </div>
        </>
     );
}

export default CustomerPayment;