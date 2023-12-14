import './cartStyle.css';
import SideBar from "../../../layouts/components/SideBar";
import CartList from './components/CartList';
import FooterCart from './components/FooterCart';
import CartData from './cart'
import { useState } from 'react';


//new
const ShoppingCart = () => {

  return (
    <div className="py-8 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
      <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
        <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
          <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-black">Customer’s Cart</p>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
            <div className="pb-4 md:pb-8 w-full md:w-40">
              <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
              <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
            </div>
            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-black">Premium Quaility Dress</h3>
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Style:</span> Italic Minimal Design</p>
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Size:</span> Small</p>
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Color:</span> Light Blue</p>
                </div>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base xl:text-lg leading-6">$36.00 <span className="text-red-300 line-through"> $45.00</span></p>
                <p className="text-base xl:text-lg leading-6 text-black">01</p>
                <p className="text-base xl:text-lg font-semibold leading-6 text-black">$36.00</p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
            <div className="w-full md:w-40">
              <img className="w-full hidden md:block" src="https://i.ibb.co/s6snNx0/Rectangle-17.png" alt="dress" />
              <img className="w-full md:hidden" src="https://i.ibb.co/BwYWJbJ/Rectangle-10.png" alt="dress" />
            </div>
            <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-full flex flex-col justify-start items-start space-y-8">
                <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-black">High Quaility Italic Dress</h3>
                <div className="flex justify-start items-start flex-col space-y-2">
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Style: </span> Italic Minimal Design</p>
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Size: </span> Small</p>
                  <p className="text-sm leading-none text-gray-800"><span className="text-black underline">Color: </span> Light Blue</p>
                </div>
              </div>
              <div className="flex justify-between space-x-8 items-start w-full">
                <p className="text-base xl:text-lg leading-6">$20.00 <span className="text-red-300 line-through"> $30.00</span></p>
                <p className="text-base xl:text-lg leading-6 text-black0">01</p>
                <p className="text-base xl:text-lg font-semibold leading-6 text-black">$20.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
          <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
            <h3 className="text-xl font-semibold leading-5 text-black">Summary</h3>
            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
              <div className="flex justify-between w-full">
                <p className="text-base  leading-4 text-black">Subtotal</p>
                <p className="text-base  leading-4 text-black">$56.00</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base  leading-4 text-black">Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3 text-gray-800">STUDENT</span></p>
                <p className="text-base  leading-4 text-black">-$28.00 (50%)</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base  leading-4 text-black">Shipping</p>
                <p className="text-base  leading-4 text-black">$8.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base font-semibold leading-4 text-black">Total</p>
              <p className="text-base  font-semibold leading-4 text-black">$36.00</p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
            <h3 className="text-xl font-semibold leading-5 text-black">Shipping</h3>
            <div className="flex justify-between items-start w-full">
              <div className="flex justify-center items-center space-x-4">
                <div className="w-8 h-8">
                  <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <p className="text-lg leading-6  font-semibold text-black">DPD Delivery<br /><span className="font-normal">Delivery with 24 Hours</span></p>
                </div>
              </div>
              <p className="text-lg font-semibold leading-6 text-black">$8.00</p>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="mt-6 md:mt-0  py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">View Carrier Detail</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
        <h3 className="text-xl  font-semibold leading-5 text-black">Customer</h3>
        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
          <div className="flex flex-col justify-start items-start flex-shrink-0">
            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
              <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
              <div className="flex justify-start items-start flex-col space-y-2">
                <p className="text-base font-semibold leading-4 text-left text-black">David Kent</p>
                <p className="text-sm leading-5 text-black">10 Previous Orders</p>
              </div>
            </div>
            <div className="flex justify-center text-black md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
              <img className="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
              <p className="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                <p className="text-base font-semibold leading-4 text-center md:text-left text-black">Shipping Address</p>
                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-black">180 North King Street, Northhampton MA 1060</p>
              </div>
              <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                <p className="text-base font-semibold leading-4 text-center md:text-left text-black">Billing Address</p>
                <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-black0">180 North King Street, Northhampton MA 1060</p>
              </div>
            </div>
            <div className="flex w-full justify-center items-center md:justify-start md:items-start">
              <button className="mt-6 md:mt-0  py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ShoppingCart;
