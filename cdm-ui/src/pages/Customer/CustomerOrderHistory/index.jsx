import SideBar from "../../../layouts/components/SideBar";
import './OrderHis.css'

function CustomerOrderHistory() {
    return ( 
        <>
           <div className="flex">
                <SideBar/>
                <div className="ml-8">
                    <h1 className='font-medium text-3xl mt-16'>Order History</h1>

                    {/* banner area */}
                    <div className="flex mt-4 space-x-2" style={{width: '70vw', height: '20vh'}}>
                        <div className="w-4/5 rounded-lg bg-red-200 flex-1 opacity-90">
                            <p className="text-stone-950 font-semibold ml-4 mt-6 text-xl underline">Total Spending:</p>
                            <p className="ml-6 mt-2 text-lg text-red-700 italic">$450.000.00</p>
                            <p className="ml-4 mt-2 text-xs font-thin">as figures of December 2022</p>
                        </div>
                        <div className="w-4/5 rounded-lg bg-violet-200 flex-1 opacity-90">
                            <p className="text-stone-950 font-semibold ml-4 mt-4 text-xl underline">Total order:</p>
                            <p className="ml-6 mt-2 text-lg italic text-indigo-700">20</p>
                            <p className="ml-4 mt-2 text-xs font-thin">as figures of December 2022</p>
                        </div>
                        <div className="w-4/5 rounded-lg bg-gray-200 flex-1 opacity-90">
                            <p className="text-stone-950 font-semibold ml-4 mt-4 text-xl underline">Ranking:</p>
                        </div>
                    </div>

                    {/* option area */}
                    <div className="flex space-x-1 mt-6">
                            <div className="flex-1">
                                <input type="radio" id="all" name="option" value="all" class="hidden peer"/>
                                <label for="all" class=" rounded-3xl inline-flex items-center justify-between w-4/5 p-0 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="w-full bg-white px-4 py-2 rounded-3xl text-center">All</div>
                                </label>
                            </div>
                            <div className="flex-1">
                                <input type="radio" id="pending" name="option" value="pending" class="hidden peer"/>
                                <label for="pending" class=" rounded-3xl inline-flex items-center justify-between w-4/5 p-0 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="w-full bg-white px-4 py-2 rounded-3xl text-center">Pending</div>
                                </label>
                            </div>
                            <div className="flex-1">
                                <input type="radio" id="processing" name="option" value="processing" class="hidden peer"/>
                                <label for="processing" class=" rounded-3xl inline-flex items-center justify-between w-4/5 p-0 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="w-full bg-white px-4 py-2 rounded-3xl text-center">Processing</div>
                                </label>
                            </div>
                            <div className="flex-1">
                                <input type="radio" id="complete" name="option" value="complete" class="hidden peer"/>
                                <label for="complete" class=" rounded-3xl inline-flex items-center justify-between w-4/5 p-0 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
                                    <div class="w-full bg-white px-4 py-2 rounded-3xl text-center">Complete</div>
                                </label>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex-1"></div>
                            <div className="flex-1"></div>    
                    </div>

                    {/* Table display orders */}

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
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
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 text-red-400 hover:underline">Pending</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white even:bg-gray-300">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 text-violet-500 hover:underline">Processing</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white even:bg-gray-300">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 text-lime-500 hover:underline">Complete</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white even:bg-gray-300">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Google Pixel Phone
                                    </th>
                                    <td class="px-6 py-4">
                                        Gray
                                    </td>
                                    <td class="px-6 py-4">
                                        Phone
                                    </td>
                                    <td class="px-6 py-4">
                                        $799
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 text-lime-500 hover:underline">Complete</a>
                                    </td>
                                </tr>
                                <tr class="odd:bg-white even:bg-gray-300">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Apple Watch 5
                                    </th>
                                    <td class="px-6 py-4">
                                        Red
                                    </td>
                                    <td class="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td class="px-6 py-4">
                                        $999
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 text-lime-500 hover:underline">Complete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
           </div>
        </>
     );
}

export default CustomerOrderHistory;