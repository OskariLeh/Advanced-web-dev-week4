var express = require('express');
var router = express.Router();
var recipes = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/recipe/:food", (req, res) => {
  res.send({"name": req.params.food, "instructions": ["buy", "prepare", "cook", "eat"], "ingredients": [req.params.food, "water", "bananas"]})
})

router.post("/recipe/", (req, res) => {
  recipes.push(req.body)
  res.send(req.body)
})

router.post("/images", (req, res) => {
  res.send({"msg": "Hello from /images"})
})

module.exports = router;
