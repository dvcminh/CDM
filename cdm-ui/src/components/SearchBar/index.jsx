import { useEffect } from "react";

function index() {
  useEffect(() => {});

  const showDropDownMenu_search = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext_search = (el) => {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter_search").innerText =
      targetText;
    document.getElementById("drop-down-div_search").classList.toggle("hidden");
  };

  const showDropDownMenuOne_search = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptextone_search = (el) => {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-one_search").innerText =
      targetText;
    document
      .getElementById("drop-down-div-one_search")
      .classList.toggle("hidden");
  };
  const showDropDownMenuTwo_search = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptexttwo_search = (el) => {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter-two_search").innerText =
      targetText;
    document
      .getElementById("drop-down-div-two_search")
      .classList.toggle("hidden");
  };

  const plusme_search = (el) => {
    let currentValue = parseInt(
      el.target.parentElement.parentElement.children[2].innerText
    );

    el.target.parentElement.parentElement.children[2].innerText =
      currentValue + 1000;
  };
  const minusme_search = (el) => {
    let currentValue = parseInt(
      el.target.parentElement.parentElement.children[2].innerText
    );
    if (currentValue > 0) {
      el.target.parentElement.parentElement.children[2].innerText =
        currentValue - 1000;
    }
  };

  return (
    <div className=" flex justify-start float-right relative bg-white lg:ml-96 lg:mr-32 mr-6 ml-16  mt-8">
              <input
                className="bg-white text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
                type="text"
                placeholder="Search"
              />
              <svg
                className="absolute right-3 z-10 cursor-pointer mt-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
  );
}

export default index;
