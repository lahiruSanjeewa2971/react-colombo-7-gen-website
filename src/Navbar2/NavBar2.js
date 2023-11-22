import React, { useEffect, useState } from 'react'
import './navbar2.css'
import LogoPNG from '../images/logo.svg'
import menuIcon from '../images/burger_icon_black.png'
import closeIcon from '../images/close_icon_black.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Link } from 'react-router-dom';

function NavBar2() {
    const [menuClicked, setMenuClicked] = useState(false);
    const [language, setLanguage] = useState(null);
    const open = Boolean(language);
    const { i18n } = useTranslation();

      // State
      const [apiData, setApiData] = useState();
      const [getState, setGetState] = useState('colombo');
      const [state, setState] = useState('london');
      const cityname = '';
      const zipcode = '1';
  
      // API KEY AND URL
      const apiKey = process.env.REACT_APP_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=6.92&lon=79.86&appid=${apiKey}`
  
     // Side effect
      useEffect(() => {
          fetch(apiUrl)
          .then((res) => res.json())
          .then((data) =>{
            setApiData(kelvinToFarenheit(data.main.temp))
            console.log(data);
          } );
         }
      
      , [apiUrl]);
  
      const inputHandler = (event) => {
          setGetState(event.target.value);
      };
        
      const submitHandler = () => {
          setState(getState);
      };
        
      const kelvinToFarenheit = (k) => {
          return (k - 273.15).toFixed(2);
      };

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

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        handleClose();
    }
    return (
        <nav>
            <ul id='baseNavContainer'>
                <div className='leftSideNavLinks'>
                    <li > 
                        <Link to='/'>
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
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('en')}>ENGLISH</MenuItem>
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('es')}>SPANISH</MenuItem>
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('fr')}>FRENCH</MenuItem>
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('de')}>GERMAN</MenuItem>
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('ja')}>JAPANESE</MenuItem>
                                <MenuItem id='menu-item' onClick={() => handleLanguageChange('it')}>ITALIAN</MenuItem>
                            </Menu>
                        </Link>    
                    </li>
                    <li>
                        <Link className='linkTag' to='/ingredients'>
                        STORY
                        </Link>
                    </li>
                    <li>
                        <Link className='linkTag' to='/watch'>
                        WATCH
                        </Link>
                    </li>
                    <li>
                        <Link className='linkTag' to='/contact'>
                        CONTACT
                        </Link>
                    </li>
                </div>
                <div className="middleLogo">
                    <img src={LogoPNG} alt='' />
                </div>
                <div className='rightSideNavLinks'>
                    <li className='linkTag'>FOLLOW US</li>
                    <li className='linkTag'>{apiData}&deg;C</li>
                    <li className='linkTag'>{date.toLocaleTimeString()}</li>
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