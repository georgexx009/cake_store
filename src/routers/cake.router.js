const express = require('express');
const cakeController = require('../controllers/cake.controller')
const router = express.Router();

router.get('/', async (req, res) => {
	const allCakes = await cakeController.getAll();
	if (allCakes === null) {
		res.status(400).send('error ocurred while getting all cakes');
	} else {
		res.send(allCakes);
	}
});

router.get('/:name', async (req,res) => {
	const cakeDoc = await cakeController.findByName(req.params.name);
	if (!cakeDoc) {
		res.status(400).send('Failed to retrieve from the database');
	} else {
		res.send(cakeDoc);
	}
});

router.post('/', async (req, res) => {
	const newCakeDoc = await cakeController.create(
		{...req.body}
	);
	if (!newCakeDoc) {
		res.status(400).send('Failed to save in the database');
	} else {
		res.send(newCakeDoc);
	}
});

router.put('/:name', async (req, res) => {
	const { name } = req.params;
	const updatedCake = await cakeController.updateCake(name, req.body);
	if (!updatedCake) {
		res.status(400).send('Failed to save in the database');
	} else {
		res.send(updatedCake);
	}
});

router.delete('/:name', async (req, res) => {
	const { name } = req.params;
	const deleteStatus = await cakeController.deleteCake(name);
	res.send(deleteStatus);
})

module.exports = router;