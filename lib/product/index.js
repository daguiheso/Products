var mongoose = require('mongoose');
var Schema = mongoose.Schema;   
mongoose.connect('mongodb://localhost/Products');


//creando esquema

var productSchema = new Schema({	
	name: String,
	brand: String,
	type: String,
	characteristics:[{
		base: Number,
		adicion: Number,
		material: String,
		transitions: Boolean,
	}],
	precios: [{
		precio_venta: Number,
		precio_bruto: Number,
	}]
});

//Creando nuestro modelo

//Le decimos a mongoose que nos cree un modelo llamado Artist usando el esquema artistSchema
var product = mongoose.model('product', productSchema);   //

module.exports = product;