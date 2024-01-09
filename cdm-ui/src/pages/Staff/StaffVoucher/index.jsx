import { useState } from "react";
import SideBarStaff from "../../../layouts/components/SideBarStaff";
import VoucherForm from "../StaffVoucher/VoucherForm";

function StaffVoucher() {
  const [modalOpen, setModalOpen] = useState(false);

  function addNewVoucher() {
    setModalOpen(true);
  }
  return (
    <>
      {modalOpen && <VoucherForm setOpenModal={setModalOpen} />}

      <div className="flex dark:bg-slate-800 h-screen">
        <SideBarStaff />
        {/* content */}
        <div>
          <div className="flex space-between ml-8  mt-16">
            <h1 className="font-medium text-3xl  text-black dark:text-white">
              Voucher
            </h1>
            <button
              onClick={() => addNewVoucher()}
              className="ml-auto bg-black text-white py-2.5 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-300 hover:bg-gray-700 focus:ring-gray-200"
            >
              Add new voucher
            </button>
          </div>

          <table className="ml-8 mt-8 dark:text-white">
            <thead>
              <th className="dark:bg-gray-500 ">No</th>
              <th className="dark:bg-gray-500">Code</th>
              <th className="dark:bg-gray-500">Description</th>
              <th className="dark:bg-gray-500">Percentage</th>
              <th className="dark:bg-gray-500">Expire Date</th>
            </thead>
            <tbody>
              <td>1</td>
              <td>BLACKFRIDAY20</td>
              <td>Get your favorite product with best price</td>
              <td>20%</td>
              <td>15/1/2023</td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StaffVoucher;
