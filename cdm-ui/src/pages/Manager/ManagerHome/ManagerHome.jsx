import ManagerSideBar from "../../../layouts/components/ManagerSideBar";
import "./ManagerHome.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import CardWithPieChart from "../../../components/ActiveShapePieChart/PieChartCard";
import CardWithAreaChart from "../../../components/SimpleAreaChart/AreaChartCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { cdmApi } from "../../../misc/cdmApi";

function ManagerHome() {
  const [revenue, setRevenue] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [allUsers, setAllUsers] = useState(0);
  const [averageOrderValue, setAverageOrderValue] = useState(0);
  const [numberOfOrders, setNumberOfOrders] = useState(0);

  const fetchInfo = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9296/api/v1/orders/getTotalRevenue",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("total revenue");
      console.log(res.data);
      setRevenue(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const res = await axios.get(
        "http://localhost:9296/api/v1/orders/getMonthlyRevenue",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("monthly revenue");
      console.log(res.data);
      setMonthlyRevenue(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const res = await cdmApi.getAllUsers();
      setAllUsers(res.data.size);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const res = await axios.get(
        "http://localhost:9296/api/v1/orders/getAverageOrderValue",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setAverageOrderValue(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      const res = await axios.get(
        "http://localhost:9296/api/v1/orders/getOrdersPerMonth",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      function getNumberOfOrdersForCurrentMonth(ordersData) {
        const date = new Date();
        const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase();

        const numberOfOrders = ordersData[month];
        console.log("Number of orders:", numberOfOrders);
        return numberOfOrders;
      }
      console.log("orders per month");
      console.log(res.data);
      const currentMonthOrders = getNumberOfOrdersForCurrentMonth(res.data);
      setNumberOfOrders(currentMonthOrders);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const StatsCardUpward = ({ title, value, trend }) => {
    return (
      <div className="w-64 bg-white shadow-md rounded-lg p-4 flex items-center">
        <div className="text-blue-500 mr-2">
          <FaArrowUp size={20} /> {/* Change the icon and size as needed */}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600">{title}</span>
          <span className="text-2xl font-bold">{value}</span>
          <span
            className={`text-sm ${
              trend > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend > 0 ? "+" : "-"} {Math.abs(trend)}%
          </span>
        </div>
      </div>
    );
  };
  const StatsCardDownward = ({ title, value, trend }) => {
    return (
      <div className="w-64 bg-white shadow-md rounded-lg p-4 flex items-center">
        <div className="text-red-500 mr-2">
          <FaArrowDown size={20} /> {/* Use the downward arrow icon */}
        </div>
        <div className="flex flex-col">
          <span className="text-gray-600">{title}</span>
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm text-red-500">- {Math.abs(trend)}%</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex">
        <ManagerSideBar />
        <div className="ml-8">
          <h1 className="font-medium text-3xl mt-16">Dashboard</h1>
          {/* Stats */}
          <div
            className="flex mt-4 space-x-2"
            style={{ width: "70vw", height: "20vh" }}
          >
            <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
              <StatsCardUpward title="Revenue" value={revenue} trend={4.75} />
            </div>
            <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
              <StatsCardUpward
                title="Number of Users"
                value={allUsers}
                trend={54.02}
              />
            </div>
            <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
              <StatsCardDownward
                title="Average Order Value"
                value={averageOrderValue}
                trend={-1.39}
              />
            </div>
            <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
              <StatsCardUpward
                title="Number of Orders"
                value={numberOfOrders}
                trend={10.18}
              />
            </div>
          </div>
          {/* Charts */}
          <div className="flex mt-4 space-x-2">
            <div className="rounded-lg flex flex-1 opacity-90 justify-center items-center">
              <CardWithPieChart />
            </div>
            <div className="rounded-lg flex flex-auto opacity-90 justify-center items-center">
              <CardWithAreaChart monthlyRevenue={monthlyRevenue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerHome;
