
const Twit = require('twit');

const twitterConfig = {
  consumer_key: 'FylUUlAJWi4NWwYc9W21tOPXN',
  consumer_secret: 'Q9EVUw0VvKQHhBBycdUQP6YwlnElczJ1SLNO6ycLiHjUYQJpqU',
  access_token: '1471210403678265344-3RzBTTYWecCIfJuKlfr6y3jNh9ceBk',
  access_token_secret: '1HEAleIy7EJXakzjAN3SAHcWWBPnE8bfuI56Fc0YGuBvw',
};

const twitter = new Twit(twitterConfig);

module.exports = twitter;