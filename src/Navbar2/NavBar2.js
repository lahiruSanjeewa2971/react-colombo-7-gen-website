import React, { useEffect, useState } from 'react'
import './navbar2.css'
import LogoPNG from '../images/logo.svg'
import menuIcon from '../images/burger_icon_black.png'
import closeIcon from '../images/close_icon_black.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';


function NavBar2() {
    const [menuClicked, setMenuClicked] = useState(false);
    const [language, setLanguage] = useState(null);
    const open = Boolean(language);

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

    const handleMouseOver = (event) => {
        setLanguage(event.currentTarget);
      };
    const handleClose = () => {
        setLanguage(null);
    }
    return (
        <nav>
            <ul id='baseNavContainer'>
                <div className='leftSideNavLinks'>
                    <li > 
                        <Button id='basic-button'
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onMouseOver={handleMouseOver}
                        
                        >
                            LANGUAGE
                        </Button>
                        <Menu
                        id="basic-menu"
                        language={language}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        >
                            <MenuItem id='menu-item' onClick={handleClose}>ENGLISH</MenuItem>
                            <MenuItem id='menu-item' onClick={handleClose}>SPANISH</MenuItem>
                            <MenuItem id='menu-item' onClick={handleClose}>FRENCH</MenuItem>
                            <MenuItem id='menu-item' onClick={handleClose}>GERMAN</MenuItem>
                            <MenuItem id='menu-item' onClick={handleClose}>JAPANESE</MenuItem>
                            <MenuItem id='menu-item' onClick={handleClose}>ITALIAN</MenuItem>

                        </Menu>
                    </li>
                    
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