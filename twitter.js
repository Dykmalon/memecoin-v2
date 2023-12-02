
const Twit = require('twit');

const twitterConfig = {
  consumer_key: 'bwIQitNMn38NJqpo7gC8pXGqT',
  consumer_secret: 'd1fK1x7c1ZHNKMXKRwejK9fkMmzcpti5HRH0aG12TwB1Pe6YuN',
  access_token: '1730842544001449984-TDGWUDeMWaiMmnQwdYYlhl3dUdzzmC',
  access_token_secret: 'OWF0kgdtHLbGq7xDU43skPGe4dxfwZolVV7NMg23WxtNg',
};

const twitter = new Twit(twitterConfig);

module.exports = twitter;