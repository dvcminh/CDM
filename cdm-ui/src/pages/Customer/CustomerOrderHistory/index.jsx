import SideBar from "../../../layouts/components/SideBar";
import { cdmApi } from "../../../misc/cdmApi";
import { useEffect, useState } from "react";
import OderdetailModal from "./component/OderdetailModal";
import "./OrderHis.css";

function CustomerOrderHistory() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);

  let totalAmount = 0;
  let totalOrder = 0;
  let ranking = "Bronze"

  orders.forEach((order) => {
    totalAmount += order.totalAmount;
    totalOrder += 1;
    if(totalAmount > 10000){
        ranking = "GOLD";
    }
    else   {
       if(totalAmount > 5000){
        ranking = "Silver";
       }
    }
  });

  const getOrders = async () => {
    try {
      const response = await cdmApi.getOrderByUserId(userData.username);
      setOrders(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrdersDetail = async (orderid) => {
    try {
      const response = await cdmApi.getOrderDetailByOrderId(orderid);
      setOrderDetail(response.data.content);
      console.log(response.data);
      setModalOpen(true)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="ml-8">
        {modalOpen && <OderdetailModal setOpenModal={setModalOpen} />}

          <h1 className="font-medium text-3xl mt-16">Order History</h1>

          {/* banner area */}
          <div
            className="flex mt-4 space-x-2"
            style={{ width: "70vw", height: "20vh" }}
          >
            <div className="w-4/5 rounded-lg bg-red-200 flex-1 opacity-90">
              <p className="text-stone-950 font-semibold ml-4 mt-6 text-xl underline">
                Total Spending:
              </p>
              <p className="ml-6 mt-2 text-lg text-red-700 italic">
                ${totalAmount}              </p>
              <p className="ml-4 mt-2 text-xs font-thin">
                as figures of December 2022
              </p>
            </div>
            <div className="w-4/5 rounded-lg bg-violet-200 flex-1 opacity-90">
              <p className="text-stone-950 font-semibold ml-4 mt-4 text-xl underline">
                Total order:
              </p>
              <p className="ml-6 mt-2 text-lg italic text-indigo-700">{totalOrder}</p>
              <p className="ml-4 mt-2 text-xs font-thin">
                as figures of December 2022
              </p>
            </div>
            <div className="w-4/5 rounded-lg bg-gray-200 flex-1 opacity-90">
              <p className="text-stone-950 font-semibold ml-4 mt-4 text-xl underline">
                Ranking:
              </p>
              <p className="ml-6 mt-2 text-lg italic text-gray-700">{ranking}</p>
              <p className="ml-4 mt-2 text-xs font-thin">
                update to the end of year
              </p>
            </div>
          </div>

          
          {/* Table display orders */}

          {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead class="text-xs text-gray-700 uppercase bg-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white even:bg-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="px-6 py-4">Silver</td>
                  <td class="px-6 py-4">Laptop</td>
                  <td class="px-6 py-4">$2999</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-red-400 hover:underline"
                    >
                      Pending
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="px-6 py-4">White</td>
                  <td class="px-6 py-4">Laptop PC</td>
                  <td class="px-6 py-4">$1999</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-violet-500 hover:underline"
                    >
                      Processing
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="px-6 py-4">Black</td>
                  <td class="px-6 py-4">Accessories</td>
                  <td class="px-6 py-4">$99</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-lime-500 hover:underline"
                    >
                      Complete
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Google Pixel Phone
                  </th>
                  <td class="px-6 py-4">Gray</td>
                  <td class="px-6 py-4">Phone</td>
                  <td class="px-6 py-4">$799</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-lime-500 hover:underline"
                    >
                      Complete
                    </a>
                  </td>
                </tr>
                <tr class="odd:bg-white even:bg-gray-300">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple Watch 5
                  </th>
                  <td class="px-6 py-4">Red</td>
                  <td class="px-6 py-4">Wearables</td>
                  <td class="px-6 py-4">$999</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-lime-500 hover:underline"
                    >
                      Complete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          <div className="mt-8 mr-16">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Order Date</th>
                  <th>Total Amount</th>
                  <th>Payment Status</th>
                  <th>Shipping Status</th>
                  <th>Shipping Address</th>
                  <th>Voucher Value</th>
                  <th>Shipping Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>${order.totalAmount}</td>
                    <td className="text-lime-700">{order.paymentStatus}</td>
                    <td className="text-lime-700">{order.shippingStatus}</td>
                    <td>{order.shippingAddress}</td>
                    <td>${order.voucherValue}</td>
                    <td>${order.shippingValue}</td>
                    <td><button onClick={() => getOrdersDetail(order.id)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerOrderHistory;
