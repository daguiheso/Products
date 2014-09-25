var mongoose = require('mongoose');
var Schema = mongoose.Schema;   
mongoose.connect('mongodb://localhost/Products');


//creando esquema

var productSchema = new Schema({	
	name: String,
	brand: Number,
	type: String,
	characteristics:[{
		Base: Number,
		Adicion: Number,
		Material: String,
		Transitions: Boolean,
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