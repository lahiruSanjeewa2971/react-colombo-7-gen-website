import React, { useEffect, useState } from 'react'
import './navbar2.css'
import LogoPNG from '../images/logo.png'
import menuIcon from '../images/burger_icon_black.png'
import closeIcon from '../images/close_icon_black.png'

function NavBar2() {
    const [menuClicked, setMenuClicked] = useState(false)
    var [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log("hii")
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    const menuIconClicked = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <nav>
            <ul id='baseNavContainer'>
                <div className='leftSideNavLinks'>
                    <li>LANGUAGE</li>
                    <li>STORY</li>
                    <li>WATCH</li>
                    <li>CONTACT</li>
                </div>
                <div className="middleLogo">
                    <img src={LogoPNG} alt='' />
                </div>
                <div className='rightSideNavLinks'>
                    <li>FOLLOW US</li>
                    <li>TEMPRATURE</li>
                    <li>{date.toLocaleTimeString()}</li>
                </div>
            </ul>

            {/* Side nav | it only appeasr when the screen shrinked */}
            <ul id='sideBarContainer' className={`${menuClicked ? '#sideBarContainer ' : '#sideBarContainer active'}`}
            >
                <div className='menuNavLinks'>
                    <li>LANGUAGE</li>
                    <li>STORY</li>
                    <li>WATCH</li>
                    <li>CONTACT</li>
                    <li>FOLLOW US</li>
                </div>
                <div className="sideBarBottomContainer">
                    <li>{date.toLocaleTimeString()}</li>
                    <li>TEMPRATURE</li>
                </div>
            </ul>

            <div className='mobileScreenSizeNav' onClick={menuIconClicked}>
                <div></div>
                {
                    menuClicked ?
                        <img src={closeIcon} alt='' width='25px' height='25px' />
                        :
                        <img src={menuIcon} alt='' width='25px' height='25px' />
                }
            </div>
        </nav>

    )
}

export default NavBar2