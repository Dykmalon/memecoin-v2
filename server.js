// server.js
const express = require('express');

// Use dynamic import for ESM
const { default: fetch } = require('node-fetch');

const app = express();
const port = process.env.PORT || 3001;

const twitterBearerToken = 'AAAAAAAAAAAAAAAAAAAAALw6rQEAAAAA56MjOLrnW5%2FrP%2Fjl5MQ23vL8l6M%3DJPZrpwthoin4rOkj7jREk5nvJVquzdxSRSHEbqR2dspgdXGi9F';

app.use(express.json());

app.post('/follow', async (req, res) => {
  const userId = req.body.userId;

  try {
    const response = await fetch(`https://api.twitter.com/2/users/${userId}/following`, {
      method: 'POST',
      headers: {
        'Authorization': `${twitterBearerToken}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      res.json({ success: true });
    } else {
      res.status(response.status).json({ error: data.errors });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
