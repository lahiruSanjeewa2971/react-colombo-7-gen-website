import React, { useState } from 'react'

import './navbar.css'

function NavBar() {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuIconClicked = () => {
        setMenuClicked(!menuClicked);
    }
    return (
        <nav>
            <div className={`${menuClicked ? 'logo-container' : ''}`}>
                {/* <a href='#'>Colombo 7 Gin</a> */}
            </div>

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