import React from "react";
import { RingLoader} from "react-spinners";

function Loading({ setOpenModal, data }) {
  return (
    <div className="modalBackground">
        <RingLoader />
    </div>
  );
}

export default Loading;
