import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function VoucherForm({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <span className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FontAwesomeIcon className="text-black" icon={faClose} />
          </button>
        </span>
        <div className="flex flex-col">
          <div className="flex justify-center items-center">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Code
              </label>
              <input
                type="text"
                id="first_name"
                className="w-[70vh] bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="code"
                required=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-bold text-gray-900"
              >
                Description
              </label>
              <input
                type="text"
                id="first_name"
                className=" w-[70vh] bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="code"
                required=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                % Discount
              </label>
              <input
                type="text"
                id="first_name"
                className="w-[70vh] bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="code"
                required=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-bold text-gray-900 "
              >
                Expire Date
              </label>
              <input
                type="text"
                id="first_name"
                className=" w-[70vh] bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="code"
                required=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="ml-auto mr-auto mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherForm;
