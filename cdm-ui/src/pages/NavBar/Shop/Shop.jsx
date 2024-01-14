import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cdmApi } from "../../../misc/cdmApi";
import { useEffect, useState } from "react";
import ShopCard from "../../../components/ShopCard";


export default function Shop() {
  const [acc, setAcc] = useState([]);
  const [mer, setMer] = useState([]);
    const fetchInfo = async () => {
        try {
          const res = await cdmApi.getShopByType('accessories');
          const other = await cdmApi.getShopByType('merchandise');
          const data = await cdmApi.getAllShop();
          
          // console.log(data);
          setAcc(res.data);
          console.log(res.data);
          setMer(other.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
    useEffect(() => {
        fetchInfo();
    }, []);

  return (
    <div className="bg-white dark:bg-slate-800">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only dark:text-white">Products</h2>
        {/* Accessories */}
        <div className="flex mb-4 ">
          <h1 className="text-xl dark:text-white">Vehicle Accessories</h1>
          <a
            href="/shop/accessories"
            className="flex ml-auto hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mt-1 dark:text-white" />
            <h1 className="ml-4 dark:text-white">See all</h1>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {acc.map((product) => (
              <ShopCard data={{id: product.id ,imgSrc: product.image_url, name: product.name, price: product.price}} />
          ))}
        </div>
        {/* Collection & Merchandise */}
        <div className="flex mt-8 mb-4 ">
          <h1 className="text-xl dark:text-white">Collection & Merchandise</h1>
          <a
            href="/shop/merchandise"
            className="flex ml-auto hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mt-1 dark:text-white" />
            <h1 className="ml-4 dark:text-white">See all</h1>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {mer.map((product) => (
              <ShopCard data={{id: product.id ,imgSrc: product.image_url, name: product.name, price: product.price}} />
          ))}
        </div>
      </div>
    </div>
  );
}
