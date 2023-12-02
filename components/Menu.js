// Menu.js

import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMenuItemClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="main-menu">
      <div>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>

          <li>
            <Link href="/farming">FARMING</Link>
          </li>

          <li>
            <Link href="/tokenomics">TEXKONOMICS</Link>
          </li>

          <li>
            <div onClick={handleMenuItemClick}>WHITEPAPER</div>
          </li>

          {isPopupVisible && (
            <div className="popup">

              <div className="bar-top">
                <div>CONCEPT</div>
              </div>

              <div className="popup-content">
                <p>no promises</p>
                <p>no expectations</p>
                <p>just $JEFF</p>
              </div>
              <div><button onClick={handleClosePopup}><img src="/close.svg" width="30px" /></button></div>
            </div>
          )}

        </ul>
      </div>

      <style jsx>{`
        .popup {
          position: fixed;
          top: 65vh; /* Start from the top of the screen */
          left: 50%;
          transform: translate(-50%, -100%);
          background:url('/cow/popup.svg');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          width: 48vh;
          height: 70vh;
          display: flex;
          font-size: 2em;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          padding-bottom: 20px;
          padding-top: 14.5vh;
          font-family: 'alfaSlab';
          transition: transform 0.5s ease; /* Add smooth transition effect */
        }

        .popup.open {
          transform: translate(-50%, 0); /* Slide down to the center of the screen */
        }

        .popup-content {
    
          padding-top: 23%;
          width: 100%;
          border-radius: 8px;
          text-align: center;
        
        }

        .bar-top {

          width: 100%;
          color: black;
          font-size: 1em;
          text-align: center;
          justify-content: space-between;
          padding: 20px;
        }

        .top-para {
          padding-top: 40px;
          margin: 0;
          font-family: Changa One, Impact, sans-serif;
          padding-bottom: 10px;
        }

        .popup button{
          
          background: transparent;
          border: none;

        }
      `}</style>
    </div>
  );
};

export default Menu;
