const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
	name: {
		type: String,		
	},
	price: {
		type: Number,
	},
	flavors: {
		type: [String],
	}
});

const cakeModel = mongoose.model('Cake', CakeSchema);

module.exports = cakeModel;