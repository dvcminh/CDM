import CarCard from "../../components/CarCard";
import '../../components/CarCard/CarCard.css'
import SortCarSideBar from "../../components/SortCarSideBar";
function VehicleModelS () {
    const carcards = [
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY21P,$PPSW,$DV4W,$SLR1,$MTY05,$INPB0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        },
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY19B,$PMNG,$DV4W,$MTY11,$INPW0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        },
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY20P,$PBSB,$DV4W,$MTY11,$INPW0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        },
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY21P,$PPMR,$DV4W,$SLR1,$MTY05,$INPW0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        },
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY21P,$PMNG,$DV4W,$SLR1,$MTY05,$INPW0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        },
        {
            model: 'Model S',
            price: '$75,000',
            priceAfterDiscount: '$71,099',
            type: 'Model S Dual Motor All-Wheel',
            pricepermonth: '$1,113/month',
            image: <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$WY21P,$PMNG,$DV4W,$SLR1,$MTY05,$INPW0&view=STUD_3QTR&model=my&size=1441&bkba_opt=1&crop=1300,500,300,300&" alt="xe" className="card__img"/>,
            fig1: '375',
            fig2: '149',
            fig3: '3.1',
            feature: 'Autopilot',
            power: '1-year premium Connectivity Trial',
            mileodometer: '3,355',
            isAvailable: 'Available'
        }
    ]

    return (  
        <div className="container-flex">
            <div className="vehicle-models-sort">
                <SortCarSideBar />
            </div>
            <div className="vehicle-models-page">
                <CarCard data={carcards[0]}/>
                <CarCard data={carcards[1]}/>
                <CarCard data={carcards[2]}/>
                <CarCard data={carcards[3]}/>
                <CarCard data={carcards[4]}/>
                <CarCard data={carcards[5]}/>
            </div>
        </div>
    );
}

export default VehicleModelS;