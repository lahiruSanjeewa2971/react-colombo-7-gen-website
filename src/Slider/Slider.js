import React, { useEffect, useState } from "react";
import './Slider.css';
import { LeftSliderData } from './LeftSliderData';
import { RightSliderData } from "./RightSliderData";
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
        setLeftCurrent(leftcurrent === leftlength - 1 ? 0 : leftcurrent + 1);
        setRightCurrent(rightcurrent === 0 ? rightlength - 1 : rightcurrent - 1);
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
                            return(
                                <div key={index}>
                                    <section>
                                        <img src={slide.image} alt={slide.alt}  className="mobile-screen-image-slider" />
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Slider;
