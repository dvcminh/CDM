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
          <button className="">{selectedOption}</button>
        </MenuHandler>
        <MenuList>
            {option.map((op) => (
                  <MenuItem onClick={() => handleOptionClick(op)}>{op}</MenuItem>
            ))}
        </MenuList>
      </Menu>
    );
  }