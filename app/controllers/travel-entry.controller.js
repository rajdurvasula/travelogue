const TravelEntry = require('../models/travel-entry.model.js');
// create record
exports.create = (req, res) => {
	// validate request
	if (!req.body) {
		res.status(400).send({
			message: 'Content cannot be empty!'
		});
	}
	const travelEntry = new TravelEntry({
		title: req.body.title,
		description: req.body.description,
		place: req.body.place,
		country: req.body.country
	});
	TravelEntry.create(travelEntry, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || 'Encountered error while creating record'
			});
		} else {
			res.send(data);
		}
	});
};
// find all records
exports.findAll = (req, res) => {
	TravelEntry.findAll((err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || 'Encountered error while fetching records'
			})
		} else {
			res.send(data);
		}
	});
};
// find record by id
exports.findOne = (req, res) => {
	TravelEntry.findById(req.params.id, (err, data) => {
		if (err) {
			if (err.kind == 'not_found') {
				res.status(404).send({
					message: `Record not found for ${req.params.id}`
				});
			} else {
				res.status(500).send({
					message: 'Encountered error while fetching record'
				});
			}
		} else {
			res.send(data);
		}
	});
};
// find records by country
exports.findByCountry = (req, res) => {
	const country = req.query.country;
	TravelEntry.findByCountry(country, (err, data) => {
		if (err) {
			res.status(500).send({
				message: `Encountered error while fetching records for ${country}`
			});
		} else {
			res.send(data);
		}
	});
};
