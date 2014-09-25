var product = require('../lib/product');

var polyvs = new product({
	name: 'Base',
	brand: 'Polycore',
	type: 'VS',
	characteristics: [
		{base: 050, adicion: 0, material: 'Poly', transitions: false},
		{base: 175, adicion: 0, material: 'Poly', transitions: false},
		{base: 275, adicion: 0, material: 'Poly', transitions: false},
		{base: 375, adicion: 0, material: 'Poly', transitions: false},
		{base: 475, adicion: 0, material: 'Poly', transitions: false},
		{base: 575, adicion: 0, material: 'Poly', transitions: false},
		{base: 675, adicion: 0, material: 'Poly', transitions: false},
		{base: 750, adicion: 0, material: 'Poly', transitions: false},
		{base: 1000, adicion: 0, material: 'Poly', transitions: false}		
	],
	precios: [
		{precio_venta: 50000, precio_bruto: 15000}		
	]
});

polyvs.save(function(err, polyvs){
	console.log('Poly VS ha sido Guardado');
});

var cr39vs = new product({
	name: 'Base',
	brand: 'Plastic',
	type: 'VS',
	characteristics: [
		{base: 050, adicion: 0, material: 'CR39', transitions: false},
		{base: 100, adicion: 0, material: 'CR39', transitions: false},
		{base: 200, adicion: 0, material: 'CR39', transitions: false},		
		{base: 400, adicion: 0, material: 'CR39', transitions: false},
		{base: 600, adicion: 0, material: 'CR39', transitions: false},
		{base: 800, adicion: 0, material: 'CR39', transitions: false},
		{base: 1000, adicion: 0, material: 'CR39', transitions: false}		
	],
	precios: [
		{precio_venta: 30000, precio_bruto: 8000}		
	]
});

cr39vs.save(function(err, cr39vs){
	console.log('CR39 VS ha sido Guardado');
});