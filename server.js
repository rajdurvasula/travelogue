const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));
// parse request of content-type: application/json
app.use(express.json());
// parse request of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:  true }));
// default route
app.get('/', (req, res) => {
	res.json({message: 'Welcome to sample node mysql restapi'});
});
require('./app/routes/travel-entry.routes.js')(app);
// listen port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listerning on ${PORT}`);
});


