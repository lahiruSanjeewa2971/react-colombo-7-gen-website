import React, { useEffect, useState } from 'react'
import './navbar2.css'
import LogoPNG from '../images/logo.svg'
import menuIcon from '../images/burger_icon_black.png'
import closeIcon from '../images/close_icon_black.png';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


function NavBar2() {
    const [menuClicked, setMenuClicked] = useState(false);
    const [isOpenLanguage, setIsOpenLanguage] = useState(false);
    const [isOpenStory, setIsOpenStory] = useState(false);
    const [isOpenFollow, setIsOpenFollow] = useState(false);

    var [date, setDate] = useState(new Date());
    useEffect(() => {
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
                        <li>LANGUAGE</li>
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
                                        <li>ENGLISH</li>
                                        <li>SPANISH</li>
                                        <li>FRENCH</li>
                                        <li>GERMAN</li>
                                        <li>JAPANESE</li>
                                        <li>ITALIAN</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className='dropdownLink'
                        onMouseEnter={() => setIsOpenStory(true)}
                        onMouseLeave={() => setIsOpenStory(false)}
                    >
                        <li>STORY</li>
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
                                        <li>INGREDIENTS</li>
                                        <li>SYMBOL</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <li>WATCH</li>
                    <li><Link className='linkTag' to='/contacts'>CONTACT</Link></li>
                </div>
                <div className="middleLogo">
                    <Link to='/'><img src={LogoPNG} alt='' /></Link>
                </div>
                <div className='rightSideNavLinks'>
                    <div className="dropdownLink"
                        style={{width: '200px'}}
                        onMouseEnter={() => setIsOpenFollow(true)}
                        onMouseLeave={() => setIsOpenFollow(false)}
                    >
                        <li>FOLLOW US</li>
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
                                        <li style={{ paddingBottom: '15px' }}>FACEBOOK</li>
                                        <li style={{ paddingBottom: '15px' }}>TWITTER</li>
                                        <li>INSTAGRAM</li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <li>TEMPRATURE</li>
                    <li style={{ width: '120px' }}>{date.toLocaleTimeString()}</li>
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