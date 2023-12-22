import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";

function Modal({ setOpenModal, data }) {
  return (
    <div className="modalBackground z-50">
      <div className="modalContainer mx-8 " style={{width: 500}}>
                <span className="titleCloseBtn">
                    <button onClick={() => {setOpenModal(false);}}><FontAwesomeIcon icon={faClose} /></button>
                </span>
                <h1 className="text-2xl font-bold ml-4 xl:ml-20">Shopping Guide</h1>
                <ol className="space-y-4 list-disc ml-2 xl:ml-8" >
                    <li className="mt-4 hover:underline hover:font-bold"><a href="/vehicle">1. Configure your car</a></li>
                    <li className="mt-6">2. Book a test drive</li>
                    <li className="mt-6 ">3. Find your dealer</li>
                    <li className="mt-6 ">4. Price lists & brochures</li>
                    <li className="mt-6 ">5. Fleets & Business Customers</li>
                </ol>
      </div>
    </div>
  );
}

export default Modal;
