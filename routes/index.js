var express = require('express');
var router = express.Router();

const launchTime = new Date('09/26/2023 02:25').getTime()
/* GET home page. */
router.get('/', function(req, res, next) {
  const currentTime = new Date().getTime()
  const numberOfMilliseconds = parseInt(launchTime - currentTime)
  res.render(
    'index',
  { title: 'My Awesome Game go Better', countDown: numberOfMilliseconds  });
});

module.exports = router;
