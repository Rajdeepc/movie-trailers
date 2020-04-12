import React, { forwardRef } from 'react';
import { DropdownComponent } from './dropdown';
import './navbar.css';
import { GiFilmProjector } from "react-icons/gi";


export const NavBar = forwardRef((props, ref) => {

    const onListenValueFromDropdown = (value) => {
        props.getDropdownValue(value)
    }


    return (
        <nav className="navbar bookmyshow-navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <GiFilmProjector size={28} /> &nbsp; U-Trailers
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <div className="bookmyTabs tabs is-toggle">
                            <ul>
                                <li className="is-active">
                                    <a href="#" >
                                        <span>COMING SOON</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" > 
                                        <span>NOW SHOWING</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div >
                        <DropdownComponent dropdownData={props.languageList} valueFromDropdown={onListenValueFromDropdown}/>
                    </div>
                </div>
            </div>
        </nav>
    )
})