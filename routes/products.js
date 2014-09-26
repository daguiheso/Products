var express = require('express');
var router = express.Router();
var Product = require('../lib/product');
var debug = require('debug')('my/application:products');//debug usado para saber cuando alguien esta en esta ruta / logs por conveniencia
var _ = require('lodash');

/* GET list Products */
router.get('/', function(req, res) {
  Product.find({}, function(err, products){
  	if (err) {
  		return res.send(err)
  	}
    res.render('products/index',{products: products}); // objeto con nuestras variables
  	//res.send(products);  //formato JSON
  });
});

router.get('/add', function(req, res){
	res.render('products/add');
});

router.get('/:product_id', function(req, res){
  Product.findById(req.params.product_id, function(err, product){
    res.render('products/detail', {product: product});
  });
});



router.post('/', function(req, res){
	debug('Creating new Product');  //mensaje en pantalla
	var name = req.body.name;  // el nombre del product va a venir como un parametro del body

	if(!_.isUndefined(name) || name !==''){  // si el product esta definido vamos a crear
		var product = new Product({name:name});
		product.save(function(err, product){
			if (err) {
				return res.send(err);
			}
			res.send(product.name + ' was saved');
		});
	}else{
		res.send('Please specify product name');
	}
});


module.exports = router;