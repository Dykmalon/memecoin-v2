// components/Referral.js

import React from 'react';
import axios from 'axios';

const Referral = () => {
    const handleTask = async (task) => {
      try {
        // Make API call to complete task
        const response = await axios.post('/api/complete-task', { task });
  
        // Handle response as needed
        console.log(response.data);
      } catch (error) {
        console.error(error);  // Log the Axios error details
        // Handle the error or add more specific logging
      }
    };

  return (
    <div>
      <h1>Referral Program</h1>
      <button onClick={() => handleTask('follow')}>Follow Twitter Account</button>
      <button onClick={() => handleTask('rt')}>Retweet Post</button>
      <button onClick={() => handleTask('like')}>Like Post</button>
      {/* Add more task buttons as needed */}
    </div>
  );
};

export default Referral;
