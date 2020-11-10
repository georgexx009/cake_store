const cakeModel = require('../database/models/cake.model');

module.exports = {
	create: async ({ name, price, flavors }) => {
		let newCakeDoc;
		try {
			newCakeDoc = await cakeModel.create({ name, price, flavors});
		} catch (err) {
			console.log(err.message);
			return null;
		}
		return newCakeDoc;
	},
	getAll: async () => {
		let allCakesDoc;
		try {
			allCakesDoc = await cakeModel.find()
		} catch (err) {
			console.log(err.message);
			return null;
		}
		return allCakesDoc;
	},
	findByName: async name => {
		let cakeDoc;
		try {
			cakeDoc = await cakeModel.findOne({ name });
		} catch (err) {
			console.log(err.message);
			return null;
		}
		return cakeDoc;
	},
	updateCake: async (name, newCakeData) => {
		let updatedCakeDoc;
		try {
			updatedCakeDoc = await cakeModel.findOneAndUpdate({ name }, newCakeData, { new: true } );			
		} catch (err) {
			console.log(err.message);
			return null;
		}
		return updatedCakeDoc;
	},
	deleteCake: async name => {
		let statusDelente;
		try {
			statusDelente = await cakeModel.findOneAndDelete({ name })
		} catch (err) {      
      console.log(err.message);
      return null;
		}
		return statusDelente;
	}
}