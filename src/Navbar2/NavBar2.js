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
import { motion, AnimatePresence } from 'framer-motion';

function NavBar2() {
    const [menuClicked, setMenuClicked] = useState(false);

    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [isOpenStory, setIsOpenStory] = useState(false);
    const [isOpenFollow, setIsOpenFollow] = useState(false);
    // State
    const [apiData, setApiData] = useState();
    const [getState, setGetState] = useState('colombo');
    const [state, setState] = useState('london');
    // API KEY AND URL
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=6.92&lon=79.86&appid=${apiKey}`

    // Side effect
    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setApiData(kelvinToFarenheit(data.main.temp))
                console.log(data);
            });
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


    return (
        <nav>
            <ul id='baseNavContainer'>
                <div className='leftSideNavLinks'>
                    <div className="dropdownLink"
                        onMouseEnter={() => setIsOpenLanguage(true)}
                        onMouseLeave={() => setIsOpenLanguage(false)}
                    >
                        <li className='linkTag'>LANGUAGE</li>
                        <AnimatePresence>
                            {isOpenLanguage && (
                                <motion.div
                                    className='dropdownContainer'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
                                >
                                    <ul>
                                        <li className='linkTag'>ENGLISH</li>
                                        <li className='linkTag'>SPANISH</li>
                                        <li className='linkTag'>FRENCH</li>
                                        <li className='linkTag'>GERMAN</li>
                                        <li className='linkTag'>JAPANESE</li>
                                        <li className='linkTag'>ITALIAN</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='dropdownLink'
                        onMouseEnter={() => setIsOpenStory(true)}
                        onMouseLeave={() => setIsOpenStory(false)}
                    >
                        <li className='linkTag'>STORY</li>
                        <AnimatePresence>
                            {isOpenStory && (
                                <motion.div
                                    className='dropdownContainer'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
                                >
                                    <ul>
                                        <li><Link className='linkTag' to='/ingredients'>INGREDIENTS</Link></li>
                                        <li className='linkTag'>SYMBOL</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <li>
                        <Link className='linkTag' to='/watch'>
                            WATCH
                        </Link>
                    </li>
                    <li>
                        <Link className='linkTag' to='/contacts'>
                            CONTACT
                        </Link>
                    </li>
                </div>
                <div className="middleLogo">
                    <Link to='/'><img src={LogoPNG} alt='' /></Link>
                </div>
                <div className='rightSideNavLinks'>
                    <div className="dropdownLink"
                        onMouseEnter={() => setIsOpenFollow(true)}
                        onMouseLeave={() => setIsOpenFollow(false)}
                    >
                        <li className='linkTag'>FOLLOW US</li>
                        <AnimatePresence>
                            {isOpenFollow && (
                                <motion.div
                                    className='dropdownFollow'
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.8, type: 'spring', stiffness: 150 }}
                                >
                                    <ul>
                                        <li className='linkTag' style={{ paddingBottom: '15px' }}>FACEBOOK</li>
                                        <li className='linkTag' style={{ paddingBottom: '15px' }}>TWITTER</li>
                                        <li className='linkTag' >INSTAGRAM</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
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
                    <li>{apiData}&deg;C</li>
                </div>
            </ul>

            <div className={`mobileScreenSizeNav ${menuClicked ? 'sideNavMobileClicked' : ''}`} >
                <div></div>
                {
                    menuClicked ?
                        <img src={closeIcon} alt='' width='25px' height='25px' onClick={menuIconClicked} />
                        :
                        <img src={menuIcon} alt='' width='25px' height='25px' onClick={menuIconClicked} />
                }
            </div>
        </nav>


    )
}

export default NavBar2