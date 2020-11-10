const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
	name: {
		type: String,		
		unique: true,
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