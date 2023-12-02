import React from 'react';
import Layout from '../components/Layout';
import Bg from '../components/Bg';

const Tokenomics = () => {
  return (
    <Layout>
      <div className="main-token">
        <div className="main-land-bg">
          <Bg />
        </div>

        <div className="main-bg">
          <Bg/>
        </div>

        <div className="token-land">

          <div>NAME:$BILLY</div>
          <div>Totall supply : 100,000,000</div>
          <div>Limit per mint : 1000</div>

        </div>

      </div>
    </Layout>
  );
};

export default Tokenomics;