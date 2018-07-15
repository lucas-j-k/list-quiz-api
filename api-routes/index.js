var express = require('express');
var router = express.Router();

var listRoutes = require('./list');
var entryRoutes = require('./entry');

router.use('/list', listRoutes);
router.use('/entry', entryRoutes);

router.get('/', function(req, res, next){
  res.send('Base for the api routes');
})

module.exports = router;
