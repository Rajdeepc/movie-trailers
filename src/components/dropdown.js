import React, {forwardRef} from 'react';
import './dropdown.css';

export const DropdownComponent = forwardRef((props, ref) => {
    return (
        <div>
            <select>
            {
                props.dropdownData.map((item,index) => {
                    return (
                        
                                <option key={index} value="{item}">{item}</option>
                       
                    )
                })
            }
             </select>
        </div>
    )
})