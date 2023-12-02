import React from 'react';
import Menu from './Menu';
import Layout from './Layout';
import Bg from '../components/Bg';

const Landing = () => {
    return (
        <Layout>
            <div className="main-land">

                <div className="main-land-bg">
                    <Bg/>
                </div>
                
                <div className="home-land">
                    <div className="home-hero-text">
                        <h1>$BILLY</h1>
                        <p>COWBOY</p>
                    </div>

                    <div className="hero-img">
                        <img src='/cow/cow.svg' alt="Hero" />
                    </div>
                         
                </div>
            </div>
        </Layout>
    );
};

export default Landing;
