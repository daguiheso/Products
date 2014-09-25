var express = require('express');
var router = express.Router();
var product = require('../lib/product');

/* GET list Products */
router.get('/', function(req, res) {
  product.find({}, function(err, products){
  	if (err) {
  		return res.send(err)
  	}
  	res.render('product/index',{products: products}); // objeto con nuestras variables
  });
});

module.exports = router;