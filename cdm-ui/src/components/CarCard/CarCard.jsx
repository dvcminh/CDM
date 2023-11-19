import { faBatteryHalf, faCar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './CarCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CarCard({data}) {
    return ( 
        <div className="card">
            <div className='flex'>
                <p className='card__model'>{data.model}</p>
                <p style={{marginTop: 10, marginRight: 20}}>
                    <span className='card__price'>{data.priceAfterDiscount}</span>
                    <span className='card__price-throught'>{data.price}</span>
                </p>
            </div>
            <div className='flex'>
                <p className='card__type'>{data.type}</p>
                <p className='card__ppmonth'>{data.pricepermonth}</p>
            </div>
            <p className='card__mile'>{data.mileodometer}  mile odometer</p>
            <div>
                {data.image}
            </div>
            <div className='flex' style={{marginTop: 10}}>
                <div className='figure-container'>
                    <div className='flex flex-col justify-center items-center flex-1'> 
                        <p><span className='card__figure'>{data.fig1}</span>mi</p>
                        <p className='card__current'>Range (EPA est.)</p>
                    </div>
                    <div className="card__line "></div> 
                </div>
                <div className='figure-container'> 
                    <span className='flex flex-col justify-center items-center flex-1'>
                        <p><span className='card__figure'>{data.fig2}</span>mph</p>
                        <p className='card__current'>Top Speed</p>
                    </span>
                    <div className="card__line "></div>
                </div>
                <div className='figure-container'>
                    <span className='flex flex-col justify-center items-center flex-1'>
                        <p><span className='card__figure'>{data.fig3}</span>s</p>
                        <p className='card__current'>0 - 60 mph</p>
                    </span>
                </div>
            </div>
            <br />
            <div className='flex'>
                <div className='flex-1'></div>
                <button style={{flex: 10}} className='card__view-detail-button'>View Details</button>
                <div className='flex-1'></div>
            </div>
            
            <div className='flex float-left ml-8 justify-center items-center mt-4' >
                    <FontAwesomeIcon icon={faCar}/>
                    <p className='ml-2'>{data.feature}</p>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <FontAwesomeIcon icon={faBatteryHalf} className='float-top ml-2'/>
                <p className='ml-2'>{data.power}</p>
            </div>
            <div className='flex ml-8 mt-4' style={{justifyContent: 'center', alignItems: 'center', float: 'left'}}>
                <FontAwesomeIcon icon={faCircleCheck} style={{float: top}}/>
                <p className='ml-2'>{data.isAvailable}</p>
            </div>
        </div>
     );
}

export default CarCard;