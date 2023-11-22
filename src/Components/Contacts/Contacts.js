import React, { useEffect } from 'react'
import './contacts.css'

function Contacts() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll"
    };
  }, []);
  return (
    <div className='contactsContainer'>
      <div className='topContent'>
        <h2>ROCKLAND DISTILLERIES (PVT) LTD</h2>
        <h4>160/24 KIRIMANDALA MAWATHA COLOMBO 5, SRI LANKA</h4>
        <h4>T. +94 11 4426100</h4>
        <h4>E. INFO@COLOMBOSEVENGIN.COM</h4>
      </div>

      <div className='bottomContent'>
        <h2>WHERE TO BUY</h2>
        <h4>WWW.CEYLONWINES.SE</h4>
        <div className='bottomContentSingleLine'>
          <h4 className='bottomContentLeftLink'>WWW.GINPUNCH.COM </h4>
          <h4>WWW.GINBOXSHOP.CO.UK </h4>
        </div>
        <div className='bottomContentSingleLine'>
          <h4 className='bottomContentLeftLink'>WWW.THEWHISKYEXCHANGE.COM</h4>
          <h4>WWW.GINFESTIVAL.COM</h4>
        </div>
        <div className='bottomContentSingleLine'>
          <h4 className='bottomContentLeftLink'>WWW.MASTEROFMALT.COM</h4>
          <h4>WWW.DRINKFINDER.CO.UK</h4>
        </div>
        <h4>WWW.AMAZON.CO.UK</h4>
      </div>
    </div>
  )
}

export default Contacts


/*
ROCKLAND DISTILLERIES (PVT) LTD
160/24 KIRIMANDALA MAWATHA COLOMBO 5, SRI LANKA
T. +94 11 4426100
E. INFO@COLOMBOSEVENGIN.COM

WHERE TO BUY
WWW.CEYLONWINES.SE
WWW.GINPUNCH.COM WWW.GINBOXSHOP.CO.UK 
WWW.THEWHISKYEXCHANGE.COM WWW.GINFESTIVAL.COM 
WWW.MASTEROFMALT.COM WWW.DRINKFINDER.CO.UK 
WWW.AMAZON.CO.UK

*/