// pages/api/complete-task.js

import twitter from '../../twitter';

export default async function handler(req, res) {
  const { task } = req.body;

  try {
    let response;

    switch (task) {
      case 'follow':
        // Example: Follow Twitter account
        response = await twitter.post('friendships/create', { screen_name: 'accountToFollow' });
        break;
      
      case 'rt':
        // Example: Retweet a post (replace tweetId with the actual tweet ID)
        response = await twitter.post('statuses/retweet/:id', { id: 'tweetId' });
        break;
      
      case 'like':
        // Example: Like a post (replace tweetId with the actual tweet ID)
        response = await twitter.post('favorites/create', { id: 'tweetId' });
        break;

      // Add more cases for other tasks as needed

      default:
        res.status(400).json({ success: false, message: 'Invalid task type' });
        return;
    }
    

    // Handle the response or perform additional actions
    console.log(response.data);

    res.status(200).json({ success: true, message: `Task completed: ${task}` });
} catch (error) {
  console.error(error);  // Log the error for debugging
  res.status(500).json({ success: false, message: 'Task completion failed', error: error.message });
}
}