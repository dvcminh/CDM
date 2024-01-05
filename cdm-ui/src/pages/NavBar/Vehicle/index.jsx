import React, { useEffect, useState } from "react";
import CarCard from "../../../components/CarCard";
import '../../../components/CarCard/CarCard.css'
import SortCarSideBar from "../../../components/SortCarSideBar";
import { cdmApi } from "../../../misc/cdmApi";
function Vehicle () {


    const url = "http://localhost:9296/api/v1/products/getAllCars";
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
        try {
          const res = await cdmApi.getAllCars();
          setData(res.data.content);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    

    useEffect(() => {
        fetchInfo();
    }, []);

    return (  
        <div className="container-flex">
            <div className="vehicle-models-sort">
                <SortCarSideBar/>
            </div>
            <div className="bg-gray-100 flex flex-wrap">
                    {data.map((dataObj, index) => {
                        return (
                            <CarCard data={{
                                model: dataObj.model,
                                price: dataObj.orgPrice,
                                priceAfterDiscount: dataObj.disPrice,
                                type: dataObj.trim,
                                pricepermonth: dataObj.perMonthPrice,
                                image: <img src={dataObj.imgSrc} alt="xe" className="card__img"/>,
                                fig1: dataObj.range,
                                fig2: dataObj.topSpeed,
                                fig3: dataObj.timeToReach,
                                feature: dataObj.tech,
                                power: dataObj.gift,
                                mileodometer: dataObj.odo,
                                isAvailable: dataObj.status,
                                id: dataObj.id}}
                        />
                        );
                })}
            </div>
        </div>
    );
}

export default Vehicle;