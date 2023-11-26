// components/Layout.js
import React from 'react';
import Menu from './Menu';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>
        <Menu />
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
