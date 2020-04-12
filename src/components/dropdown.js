import React, { forwardRef } from "react";
import "./dropdown.css";

export const DropdownComponent = forwardRef((props, ref) => {

    const selectChange = (event) => {
        props.valueFromDropdown(event.target.value)
    }
  return (
    <div>
      <select onChange={(event) => selectChange(event)}>
        {props.dropdownData.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
});
