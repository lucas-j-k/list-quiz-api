var express = require('express');
var router = express.Router();
var models = require('../../database/models');

//Import the algorithms to edit the JSON response.
var listFunctions = require('../../functions');

//Return all lists
router.get('/', function(req, res, next) {
  models.List.findAll({
    attributes:["id", "name"],
    })
  		.then(function(lists){
  			res.status(200).json(lists);
  		})
  		.catch(function(error){
  			res.status(500).json(error);
  		});
});

//Get a specific list based on the id param in the URL. Run text mutations based on url params:
router.get('/:id/entries', function(req, res, next){
    models.Entry.findAll({
      attributes:["id", "text"],
      where: {
        list_id: req.params.id
      }
    })
    .then(function(entries){
      let functionToRun = "";
      let mutationId = parseInt(req.query.transformation) || null;
      if(!mutationId){res.status(200).json(entries)};
      switch (mutationId) {
        case 1:
            functionToRun = "replaceMiddle";
            break;
        case 2:
            functionToRun = "replaceConsonants";
            break;
        case 3:
            functionToRun = "replaceVowels";
            break;
      }
      let mutatedArray = entries.map(function(entry){
        let newEntry = {
          id:entry.id,
          originalText:entry.text,
          mutatedText: listFunctions[functionToRun](entry.text),
          list_id: entry.list_id
        }
        return newEntry;
      })
      res.status(200).json(mutatedArray)
    })
    .catch(function(error){
      res.status(500).json(error);
    });
})


//Return basic info regarding a single list
router.get('/:id', function(req, res, next){
  models.List.find({
    where: {
      id: req.params.id
    }
  })
  .then(function(list){
    res.status(200).json(list);
  })
  .catch(function(error){
    res.status(500).json(error);
  });
})


//Get a specific list based on the id param in the URL:
router.get('/:id/percentage', function(req, res, next){
    models.Entry.findAll({
      attributes:["id", "text"],
      where: {
        list_id: req.params.id
      }
    }).then(function(entries){
      let percentage = req.query.percentage || 0;
      if(percentage === 0){res.status(400).json("No percentage specified")};
      let mutatedArray = entries.map(function(entry){
        let newEntry = {
          id:entry.id,
          originalText:entry.text,
          mutatedText: listFunctions.replaceByPercentage(entry.text, percentage)
        }
        return newEntry;
      })
      res.status(200).json(mutatedArray)
    })

    .catch(function(error){
      res.status(500).json(error);
    });
})


module.exports = router;
