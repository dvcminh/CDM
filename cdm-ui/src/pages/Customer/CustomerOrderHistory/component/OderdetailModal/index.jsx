import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faClose } from "@fortawesome/free-solid-svg-icons";

function OderdetailModal({ setOpenModal, data }) {
  return (
    <div className="modalBackground z-50">
      <div className="modalContainer">
                <span className="titleCloseBtn">
                    <button onClick={() => {setOpenModal(false);}}><FontAwesomeIcon icon={faClose} /></button>
                </span> 
      </div>
    </div>
  );
}

export default OderdetailModal;
