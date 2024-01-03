import SearchBasicExample from "../../../components/SearchBar"
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ReactPlayer from "react-player"
import { cdmApi } from "../../../misc/cdmApi"
import ShopCard from "../../../components/ShopCard"


  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  
  export default function Example() {
    const [mer, setMer] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [firstLoad, setFisrtLoad] = useState(false);

    const fetchInfo = async () => {
        try {
          const res = await cdmApi.getShopByType('merchandise');
          setMer(res.data);
          if(firstLoad === false){
            setSearchResult(res.data);
            setFisrtLoad(true);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    
      useEffect(() => {
        fetchInfo();
    }, [firstLoad]);
    const handleSearchChange = (e) => {
      if(!e.target.value) return setSearchResult(mer);
      const resultArr = mer.filter(mer => mer.name.includes(e.target.value))
      setSearchResult(resultArr);
  }
    return (
      <>
      <div className="hidden xl:block" style={{height: 500, marginTop: 0}}>
        <ReactPlayer 
                url='https://res.cloudinary.com/droondbdu/video/upload/v1702451509/y2meta.com-Mercedes_AMG_GTC_4k_-_1080p_vxpspd.mp4'
                muted={true}
                loop={true}
                playing={true}
                controls={false}
          />
    </div>
      <div className="flex flex-col">
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="flex 	justify-content">
                <h1 className="text-2xl mb-8 text-center mr-auto">Collection & Merchandise</h1>
                <div className="flex border-transparent	">
                    <select name="sort" id="sort" className="mr-4 bg-white border-transparent	mb-6 text-gray-800">
                        <option  value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    <div className="">
                    <div className=" flex justify-start float-right relative bg-white"  style={{width: 280}}>
                        <input
                          onChange={handleSearchChange}
                          className="bg-white text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
                          type="text"
                          placeholder="Search"
                        />
                        <svg
                          className="absolute right-3 z-10 cursor-pointer mt-2"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                            stroke="#4B5563"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 21L15 15"
                            stroke="#4B5563"
                            strokeWidth="1.66667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {searchResult.map((product) => (
                       <ShopCard data={{id: product.id ,imgSrc: product.image_url, name: product.name, price: product.price}} />
                       ))}
            </div>
            </div>
        </div>
      </div>
      </>
    )
  }
  