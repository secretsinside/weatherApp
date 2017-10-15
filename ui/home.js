function ShowDiv() {
	//this function displays the div element which was hidden
    document.getElementById("weatherCard").style.display = "block";
}

function triggerButton(event){
	var code = event.which || event.keyCode;
	//event.which contains the keycode of the key pressed
	if(code == 13){
		document.getElementById("submitCity").click();
		event.preventDefault();
	}
}

function fetchData(){
	var form=document.getElementById("city");
	var city="";
	city=form.elements[0].value;
	
	//store APPID in variable
	var weather = new XMLHttpRequest();
	weather.open("GET","http://api.openweathermap.org/data/2.5/weather?APPID=54564342c25b614aa4eb4005d8011a67&q="+city,false);
	weather.send(null);


	var weatherResponse = JSON.parse(weather.response);
	var tempResponse = (parseInt(weatherResponse.main.temp)-273.15).toFixed(2);
	ShowDiv();
	document.getElementById("returnTemp").innerHTML=tempResponse.toString()+" &#8451";
	document.getElementById("returnCity").innerHTML=city.toUpperCase();
	//&#8451 is for the symbol degree
	if(parseInt(tempResponse)<20){
		document.body.style.backgroundImage = "url('/windySnow.jpg')";
	}
	else{
		document.body.style.backgroundImage = "url('/skySunny.jpg')";
	}
}

