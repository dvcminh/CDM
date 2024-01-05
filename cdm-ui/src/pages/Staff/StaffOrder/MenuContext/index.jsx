import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
   
  export default function MenuDefault({option, current}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasChanged, setHasChanged] = useState(false);

    const handleOptionClick = (op) => {
        setSelectedOption(op);
    };

    useEffect(() => {
         if(!hasChanged){
            setSelectedOption(current);
            setHasChanged(true);
         }
      }, [hasChanged]);
    return (
      <Menu>
        <MenuHandler>
          <button className={
                      selectedOption === "Pending" ? "text-yellow-500" :
                      selectedOption === "Reject" ? "text-red-700" :
                      selectedOption === "Waiting" ? "text-blue-500" : "text-green-700"
                    }>{selectedOption}</button>
        </MenuHandler>
        <MenuList>
            {option.map((op) => (
                    <MenuItem
                    className={
                      op === "Pending" ? "text-yellow-500" :
                      op === "Reject" ? "text-red-700" :
                      op === "Waiting" ? "text-blue-500" : "text-green-700"
                    }
                    onClick={() => handleOptionClick(op)}
                  >
                    {op}
                  </MenuItem>
            ))}
        </MenuList>
      </Menu>
    );
  }