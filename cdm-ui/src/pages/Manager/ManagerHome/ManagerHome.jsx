import SideBar from "../../../layouts/components/SideBar";
import './ManagerHome.css'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import CardWithPieChart from "../../../components/ActiveShapePieChart/PieChartCard";
import CardWithAreaChart from "../../../components/SimpleAreaChart/AreaChartCard";

function ManagerHome() {
    const StatsCardUpward = ({ title, value, trend }) => {
        return (
          <div className="w-64 bg-white shadow-md rounded-lg p-4 flex items-center">
            <div className="text-blue-500 mr-2">
              <FaArrowUp size={20} /> {/* Change the icon and size as needed */}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-600">{title}</span>
              <span className="text-2xl font-bold">{value}</span>
              <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {trend > 0 ? '+' : '-'} {Math.abs(trend)}%
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
              <span className="text-sm text-red-500">
                - {Math.abs(trend)}%
              </span>
            </div>
          </div>
        );
    };

    return ( 
        <>
           <div className="flex">
                <SideBar/>
                <div className="ml-8">
                    <h1 className='font-medium text-3xl mt-16'>Dashboard</h1>
                    {/* Stats */}
                    <div className="flex mt-4 space-x-2" style={{width: '70vw', height: '20vh'}}>
                        <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
                            <StatsCardUpward title="Revenue" value="$405,091.00" trend={4.75} />
                        </div>
                        <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
                            <StatsCardUpward title="Overdue invoices" value="$12,787.00" trend={54.02} />
                        </div>
                        <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
                            <StatsCardDownward title="Outstanding invoices" value="$245,988.00" trend={-1.39} />
                        </div> 
                        <div className="w-56 rounded-lg flex flex-1 opacity-90 justify-center items-center">
                            <StatsCardUpward title="Expenses" value="$30,156.00" trend={10.18} />
                        </div>                     
                    </div>
                    {/* Charts */}
                    <div className="flex mt-4 space-x-2">
                        <div className="rounded-lg flex flex-1 opacity-90 justify-center items-center">
                            <CardWithPieChart/>
                        </div>
                        <div className="rounded-lg flex flex-auto opacity-90 justify-center items-center">
                            <CardWithAreaChart/>
                        </div>
                    </div>
                </div>
           </div>
        </>
     );
}

export default ManagerHome;