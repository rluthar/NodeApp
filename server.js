'use strict';

const express = require('express');
const https = require('https');

// Constants
//const PORT = 8080;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/serviceA', (req, res) => {
	console.log("sending request to service B")
	request(process.env.SERVICEB_DNS, (err, res, body) => {
  		if (err) {
  			console.log("error occurred") 
  			res.send(err);
  		} else {
  			res.send(res);
  		}
	});
});

app.listen(process.env.PORT);
console.log(`Running on Port `,process.env.PORT);
