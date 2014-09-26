var express = require('express');
var router = express.Router();
var Product = require('../lib/product');

/* GET list Products */
router.get('/', function(req, res) {
  Product.find({}, function(err, products){
  	if (err) {
  		return res.send(err)
  	}
  	res.render('products/index',{products: products}); // objeto con nuestras variables
  });
});

router.get('/:product_id', function(req, res){
  Product.findById(req.params.product_id, function(err, product){
    res.render('products/detail', {product: product});
  });
});

module.exports = router;