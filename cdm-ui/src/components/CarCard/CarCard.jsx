import { faBatteryHalf, faCar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './CarCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CarCard({data}) {
    return ( 
        <div className="card">
            <div className='container-flex'>
                <p className='card__model'>{data.model}</p>
                <p style={{marginTop: 10, marginRight: 20}}>
                    <span className='card__price'>{data.priceAfterDiscount}</span>
                    <span className='card__price-throught'>{data.price}</span>
                </p>
            </div>
            <div className='container-flex'>
                <p className='card__type'>{data.type}</p>
                <p className='card__ppmonth'>{data.pricepermonth}</p>
            </div>
            <p className='card__mile'>{data.mileodometer}  mile odometer</p>
            <div>
                {data.image}
            </div>
            <div className='container-flex' style={{marginTop: 10}}>
                <div className='figure-container'>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
                        <p><span className='card__figure'>{data.fig1}</span>mi</p>
                        <p className='card__current'>Range (EPA est.)</p>
                    </div>
                    <div className="card__line "></div> 
                </div>
                <div className='figure-container'> 
                    <span style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <p><span className='card__figure'>{data.fig2}</span>mph</p>
                        <p className='card__current'>Top Speed</p>
                    </span>
                    <div className="card__line "></div>
                </div>
                <div className='figure-container'>
                    <span style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <p><span className='card__figure'>{data.fig3}</span>s</p>
                        <p className='card__current'>0 - 60 mph</p>
                    </span>
                </div>
            </div>
            <br />
            <div className='container-flex'>
                <div style={{flex: 1}}></div>
                <button style={{flex: 10}} className='card__view-detail-button'>View Details</button>
                <div style={{flex: 1}}></div>
            </div>
            
            <div className='container-flex' style={{justifyContent: 'center', alignItems: 'center', float: 'left', marginLeft: 20}}>
                    <FontAwesomeIcon icon={faCar}/>
                    <p style={{marginLeft: 10}}>{data.feature}</p>
            </div>
            <div className='container-flex' style={{justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesomeIcon icon={faBatteryHalf} style={{float: top}}/>
                <p style={{marginLeft: 10}}>{data.power}</p>
            </div>
            <div className='container-flex' style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20, float: 'left', marginTop: -20}}>
                <FontAwesomeIcon icon={faCircleCheck} style={{float: top}}/>
                <p style={{marginLeft: 10}}>{data.isAvailable}</p>
            </div>
        </div>
     );
}

export default CarCard;