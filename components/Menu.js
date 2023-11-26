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
                <div><button onClick={handleClosePopup}><img src="/close.svg" width="30px"/></button></div>
              </div>

              <p className='top-para'>no promises</p>
              <p>no expectations</p>
              <p>just $JEFF</p>

            </div>
          )}

          {/* <li>
            <Link href="/">CONNECT X</Link>
          </li> */}
        </ul>
      </div>

      {/* Add your styles for the popup */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 600%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          border: 1px solid #ccc;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          width: 43%;
          display: flex;
          position: fixed;
          font-size: 2em;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          padding-bottom: 20px;
          font-family: Changa One, Impact, sans-serif;

        }
        .popup p{
          margin: 0;
          font-family: Changa One, Impact, sans-serif;

          padding-bottom:10px;
        }
        .bar-top{
          display: flex;
          align-items: center;
          /* align-content: center; */
          background-color: black;
          width: 100%;
          color: white;
          font-size: 1em;
          justify-content: space-between;
          padding: 20px;
        }
        .top-para{
          padding-top: 40px;
        }
      `}</style>
    </div>
  );
};

export default Menu;
