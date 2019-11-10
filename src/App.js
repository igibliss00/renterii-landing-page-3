import React, { useState } from 'react'

import Gallery from './Gallery/Gallery'
import Navbar from './Navbar/Navbar'
import './style/App.css'

function App() {
  // const [modal, setModal] = useState(false)
  // const [finishModal, setFinishModal] = useState(false)

  // const onClickHandler = () => {
  //   setModal(true)
  // }

  const videoDisplay = () => {

    let isMobile = {
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    if(isMobile.any()) {
      return (
        <div className="fullscreen-video-wrap">
          <video playsInline loop autoPlay muted poster="./media/renterii_190505_landingpg_bg.jpg">
              <source src={require("./media/renterii-web-mobile-cmp.mp4")} type="video/mp4" />
              <source src={require("./media/renterii-web-mobile.webm")} type="video/webm" />
              <source src={require("./media/renterii-web-mobile.ogv")} type="video/ogg" />
              <img src={require("./media/renterii_190505_landingpg_bg.jpg")} alt=""/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>            
        </div>
      )
    } else {
      return (
        <div className="fullscreen-video-wrap">
          <video playsInline loop autoPlay muted poster="./media/renterii_190505_landingpg_bg.jpg">
              <source src={require("./media/renterii-web-nologo-720cmp.mp4")} type="video/mp4" />
              <source src={require("./media/renterii-web-desktop.webm")} type="video/webm" />
              <source src={require("./media/renterii-web-desktop.ogv")} type="video/ogg" />
              <img src={require("./media/renterii_190505_landingpg_bg.jpg")} alt=""/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>            
        </div>
      )
    }
  }

  return (
    <div className="v-header">
      {videoDisplay()}
      <div className="menu">
        <Navbar />
        <Gallery  />
      </div>
    </div>
  )
}
export default App;

