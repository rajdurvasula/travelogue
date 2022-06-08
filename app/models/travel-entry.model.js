const sql = require('./db.js');
const TravelEntry = function(travelEntry) {
  this.title = travelEntry.title;
  this.description = travelEntry.description;
  this.place = travelEntry.place;
  this.country = travelEntry.country;
};

TravelEntry.create = (newTravelEntry, result) => {
  sql.query('INSERT into travelentry SET ?', newTravelEntry, (err, res) => {
    if (err) {
			console.log('Error creating record: ', err);
			result(err, null);
			return;
		}
		console.log('Travel Entry created: ', { id: res.insertId, ...newTravelEntry });
		result(null, { id: res.insertId, ...newTravelEntry });
  });
};

TravelEntry.findById = (id, result) => {
		sql.query(`SELECT * FROM travelentry WHERE id = ${id}`, (err, res) => {
		if (err) {
			console.log('Error fetching record: ', err);
			result(err, null);
			return;
		}
		if (res.length) {
			console.log('Found TravelEntry: ', res[0]);
			result(null, res[0]);
			return;
		}
		// record not found
		result({kind: 'not_found'}, null);
	});
};

TravelEntry.findByCountry = (country, result) => {
	sql.query(`SELECT * FROM travelentry WHERE country LIKE ${country}`, (err, res) => {
		if (err) {
			console.log('Error fetching record: ', err);
			result(err, null);
			return;
		}
		console.log('TravelEntries: ', res);
    result(null, res);
	});
};

TravelEntry.findAll = (result) => {
	sql.query('SELECT * FROM travelentry', (err, res) => {
		if (err) {
			console.log('Error fetching records: ', err);
			result(err, null);
			return;
		}
		console.log('TravelEntries: ', res);
		result(null, res);
	});
};

module.exports = TravelEntry;
