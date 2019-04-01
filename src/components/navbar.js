import React, { forwardRef } from 'react';
import { DropdownComponent } from './dropdown';
import './navbar.css';


export const NavBar = forwardRef((props, ref) => {
    return (
        <nav className="navbar bookmyshow-navbar is-fixed-top is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    Book My Show
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <div className="bookmyTabs tabs is-toggle">
                            <ul>
                                <li className="is-active">
                                    <a>
                                        <span>COMING SOON</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span>NOW SHOWING</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div >
                        <DropdownComponent dropdownData={props.languageList} />
                    </div>
                </div>
            </div>
        </nav>
    )
})