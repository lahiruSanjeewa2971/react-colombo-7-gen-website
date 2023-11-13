import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuIconClicked = () => {
        setMenuClicked(!menuClicked);
    }
    return (
        <nav>
            <a href='#'>Colombo 7 Gin</a>

            <div>
                <ul
                    id='rightSideNavLinks'
                    className={`${menuClicked ? '#rightSideNavLinks active' : '#rightSideNavLinks'}`}
                >
                    <div onClick={menuIconClicked} className='menuCloseIcon'>
                        <i className='fas fa-times'></i>
                    </div>
                    <div className='menuNavLinks'>
                        <li>LANGUAGE</li>
                        <li>STORY</li>
                        <li>WATCH</li>
                        <li>CONTACT</li>
                        <li>FOLLOW US</li>
                    </div>
                </ul>
            </div>

            <div className="mobileScreenSize" onClick={menuIconClicked}>
                {/* <i className={`${menuClicked ? 'fas fa-times' : 'fas fa-bars'}`}></i> */}
                <i className='fas fa-bars'></i>
            </div>
        </nav>

    )
}

export default NavBar