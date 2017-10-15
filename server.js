var express= require('express');
var app= express();

app.use(express.static('ui'));
app.use(express.static('image'));

app.get('/',function(req, res){
	res.sendFile(__dirname+'/ui'+'/homePage.html');
});


var lisetener= app.listen(8008);
console.log("server running on port %s", lisetener.address().port);