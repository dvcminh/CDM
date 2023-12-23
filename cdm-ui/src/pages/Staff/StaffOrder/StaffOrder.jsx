import React , { useState } from 'react';
import SideBarStaff from '../../../layouts/components/SideBarStaff';
import './StaffOrder.css';
import OrderDetailModal from '../../Customer/CustomerOrderHistory/component/OderdetailModal'
import { cdmApi } from '../../../misc/cdmApi';
import { useEffect } from 'react';
import MenuDefault from './MenuContext';



const StaffOrder = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [orderDetail, setOrderDetail] = useState([]);
    const [userInfor, setUserInfor] = useState([]);
    const [hasFetchedData, setHasFetchedData] = useState(false);
    const [hasOrders, setHasOrders] = useState(false);

  
    const getUserInfor = async (email) => {
      const response = await cdmApi.getUserMe(email);
      setUserInfor((prevData) => [...prevData, response.data]);
    };
  
    const getAllUserInfor = async () => {
      await Promise.all(
        orders.map(async (order) => {
          await getUserInfor(order.email);
        })
      );
      setHasFetchedData(true);
    };

    const getOrders = async () => {
      try {
        const response = await cdmApi.getAllOrders();
        setOrders(response.data);
        console.log("order:" , response.data);
        setHasOrders(true);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getOrdersDetail = async (orderid) => {
      try {
        const response = await cdmApi.getOrderDetailByOrderId(orderid);
        setOrderDetail(response.data.content);
        console.log(orderDetail);
        setModalOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getOrders();
      if(hasOrders){
        if (!hasFetchedData) {
          getAllUserInfor();
        }
      }
    }, [hasFetchedData, hasOrders]);

    useEffect(() => {
      console.log("Updated productData:", userInfor[0]);
    }, [userInfor]);


    return(
        <div>
        {modalOpen && <OrderDetailModal data={orderDetail} setOpenModal={setModalOpen} />}
        {userInfor.length === orders.length ? (
        <span className='flex'>
            <SideBarStaff className='flex-1'/>
            <div className="mt-8 mr-16">
            <h1 className='font-medium text-3xl mt-8 ml-12'>Manage Customer's Orders</h1>
            <table className='ml-12 mt-8 w-full table-auto'>
                  <thead> 
                    <tr className='text-sm'>
                      <th className='py-2'>No.</th>
                      <th className='py-2'>Name</th>
                      <th className='py-2'>Order Date</th>
                      <th className='py-2'>Total</th>
                      <th className='py-2'>Shipping Address</th>
                      <th className='py-2'>Payment Status</th>
                      <th className='py-2'>Shipping Status</th>
                      <th className='py-2'>Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={order.id} className='text-sm'>
                        <td className='py-2'>{index + 1}</td>
                        <td className='py-2'>{userInfor[index].email}</td>
                        <td className='py-2'>{new Date(order.orderDate).toLocaleDateString()}</td>
                        <td className='py-2'>${order.totalAmount}</td>
                        <td className='py-2'>{order.shippingAddress}</td>
                        <td className='py-2 text-lime-700'><MenuDefault option={["Waiting", "Paid"]} current={"Waiting"}/></td>
                        <td className='py-2 text-lime-700'><MenuDefault option={["Pending", "Approved", "Reject"]}  current={"Pending"}/></td>
                        {/* <td>${order.voucherValue}</td>
                        <td>${order.shippingValue}</td> */}
                        <td className='py-2'>
                          <button
                            onClick={() => getOrdersDetail(order.id)}
                            type="button"
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

          </div>
        </span>
        ) : (
          <p>Loading data...</p>
        )}
    </div>
    );
};


export default StaffOrder