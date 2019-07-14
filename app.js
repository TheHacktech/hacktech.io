var express	= require('express');
var port 	= 3000;
var app		= express();

app.use(express.static(__dirname + '/client'));
const assert = require('assert');
var mongoose        = require('mongoose');

const url = 'mongodb://localhost:27017/hacktech2020';
mongoose.connect(url, { useNewUrlParser: true });
app.listen(port, () => console.log(`Example app listening on port ${port}, directory`+__dirname));
