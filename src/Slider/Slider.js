import React, { useState, useEffect } from "react";
import './Slider.css';
import { LeftSliderData } from './LeftSliderData';
import { RightSliderData } from "./RightSliderData";
import { motion, AnimatePresence } from 'framer-motion';



function Slider({ leftSlides, rightSlides }) {

    const [leftcurrent, setLeftCurrent] = useState(0);
    const [rightcurrent, setRightCurrent] = useState(0);
    const leftlength = leftSlides.length;
    const rightlength = rightSlides.length;

    const [screenSize, setScreenSize] = useState(getCurrentDimentions());

    function getCurrentDimentions() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimentions())
        }
        window.addEventListener('resize', updateDimension)
        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])


    const nextLeftSlide = () => {
        // setLeftCurrent(leftcurrent === leftlength - 1 ? 0 : leftcurrent + 1);

        const newIndex = (leftcurrent + 1) % images.length;
        setLeftCurrent(newIndex);

    }
    const nextRightSlide = () => {
        setRightCurrent(rightcurrent === rightlength - 1 ? 0 : rightcurrent + 1);
    }

    const prevLeftSlide = () => {
        setLeftCurrent(leftcurrent === 0 ? leftlength - 1 : leftcurrent - 1);
    };
    const prevRightSlide = () => {
        setRightCurrent(rightcurrent === 0 ? rightlength - 1 : rightcurrent - 1);
    };

    if (!Array.isArray(leftSlides) || leftSlides.length <= 0) {
        return null;
    }
    if (!Array.isArray(rightSlides) || rightSlides.length <= 0) {
        return null;
    }
    const images = [
        'https://www.colombosevengin.com/wp-content/uploads/2017/01/colombo_09-1000x1498.jpg',
        'https://www.colombosevengin.com/wp-content/uploads/2017/01/colombo_06-1000x1498.jpg',
        'https://www.colombosevengin.com/wp-content/uploads/2017/01/colombo_17-1000x1498.jpg',
    ];
    return (
        <div>
            <div className="slider-container" style={{ height: screenSize.height }}>
                <div className="left-slider-container">
                    <div className="left-image-container" onClick={nextLeftSlide}>
                        {LeftSliderData.map((slide, index) => {
                            return (
                                <div className={index === leftcurrent ? 'slide active' : 'slide'} key={index}>
                                    {index === leftcurrent && (
                                        <img src={slide.image} alt={slide.alt} className="left-image" style={{ height: screenSize.height }} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="right-slider-container">
                    <div className="right-image-container" onClick={nextRightSlide}>
                        {RightSliderData.map((slide, index) => {
                            return (
                                <div className={index === rightcurrent ? 'slide active' : 'slide'} key={index} >
                                    {index === rightcurrent && (
                                        <img src={slide.image} alt={slide.alt} className="right-image" style={{ height: screenSize.height }} />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="mobile-responsive-slider">
                <div className="slider-image-container">
                    {
                        LeftSliderData.map((slide, index) => {
                            return (
                                <div key={index}>
                                    <section>
                                        <img src={slide.image} alt={slide.alt} className="mobile-screen-image-slider" />
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>


        // <div className="slider-container">
        //     <div className="left-slider-container">
        //         <div className="left-image-container" onClick={nextLeftSlide}>
        //                 <motion.img
        //                     key={leftcurrent}
        //                     src={images[leftcurrent]}
        //                     alt={`Image ${leftcurrent + 1}`}
        //                     onClick={nextLeftSlide}
        //                     style={{
        //                         cursor: 'pointer',
        //                     }}
        //                     initial={{ y: '0vh' }}
        //                     animate={{ y: 0 }}
        //                     exit={{ y: '0vh' }}
        //                     transition={{ duration: 0.8, ease: 'easeInOut' }}
        //                     className="left-image"
        //                 />
        //                 {/* {LeftSliderData.map((slide, index) => {
        //                 return (
        //                     <div className= {index === leftcurrent ? 'slide active' : 'slide'} key={index}>
        //                         {index === leftcurrent && (
        //                             <img src={slide.image} alt={slide.alt} className="left-image" />
        //                         )}
        //                     </div>
        //                 )
        //             })} */}
        //         </div>
        //     </div>
        //     <div className="right-slider-container">
        //         {/* <div>
        //             <div className="up">
        //                 <i className="fa fa-chevron-up" onClick={prevRightSlide} />
        //             </div>
        //             <div className="down">
        //                 <i className="fa fa-chevron-down" onClick={nextRightSlide}/>
        //             </div>
        //         </div> */}
        //         <div className="right-image-container" onClick={nextRightSlide}>
        //             {RightSliderData.map((slide, index) => {
        //                 return (
        //                     <div className={index === rightcurrent ? 'slide active' : 'slide'} key={index} >
        //                         {index === rightcurrent && (
        //                             <img src={slide.image} alt={slide.alt} className="right-image" />
        //                         )}
        //                     </div>
        //                 )
        //             })}
        //         </div>
        //     </div>
        // </div>
    )

}

export default Slider;
