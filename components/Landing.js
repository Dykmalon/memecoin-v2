import React from 'react';
import Menu from './Menu';
import Layout from './Layout';
import Bg from '../components/Bg';

const Landing = () => {
    return (
        <Layout>
            <div className="main-land">

                <div className="main-land-bg">
                    <Bg />
                </div>
                
                <div className="home-land">
                    <div className="home-hero-text">
                        <img src='/circle.svg' alt="Hero" />
                        <h1>MEMECOIN <br /> WEBSITE</h1>
                        <p>Nothing more that $JEFF</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Landing;
