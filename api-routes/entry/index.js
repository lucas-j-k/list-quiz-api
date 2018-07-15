var express = require('express');
var router = express.Router();

//get all entries
router.get('/', function(req, res, next) {
  res.send('ALL ENTRIES');
});

module.exports = router;
