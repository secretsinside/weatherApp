var express= require('express');
var bodyParser= require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var http = require('http');
var app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('ui'));
app.use(express.static('image'));

app.get('/', function(req, res){
	res.sendFile(__dirname+'/ui'+'/homePage.html');
});

app.post('/requestWeather', function(req, result){
	console.log(req.body.city);
	//request for weather
	
/*
	http.get("http://api.openweathermap.org/data/2.5/weather?APPID=54564342c25b614aa4eb4005d8011a67&q="+ req.body.city, function(err, res){
		console.log(res);
	});
	
*/
	var weather = new XMLHttpRequest();
	weather.open("GET","http://api.openweathermap.org/data/2.5/weather?APPID=54564342c25b614aa4eb4005d8011a67&q="+req.body.city 	,false);
	weather.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	weather.send(null);
	console.log(weather.response);
	
});

var lisetener= app.listen(8008);
console.log("server running on port %s", lisetener.address().port);