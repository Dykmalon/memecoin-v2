import React from 'react';
import Layout from '../components/Layout';
import Bg from '../components/Bg';

const Tokenomics = () => {
  return (
    <Layout>
      <div className="main-token">

        {/* <div className="main-bg">
          <Bg/>
        </div> */}

        <div className="token-land">

            <div>NAME:$JEFF</div>
            <div>Totall supply : 21,000,000</div>
            <div>Limit per mint : 1000</div>
  
        </div>

      </div>
    </Layout>
  );
};

export default Tokenomics;