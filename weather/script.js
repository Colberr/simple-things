var owmIcons = ["01","02","03","04","09","10","11","13","50"]
var wiDay = ["sunny","sunny-overcast","cloudy-high","cloudy","rain-mix","rain","storm-showers","snow","fog"]
var wiNight = ["clear","partly-cloudy","cloudy-high","cloudy","rain-mix","rain","storm-showers","snow","fog"]

var baseURL = "http://api.openweathermap.org/data/2.5/weather?APPID=3bf87c773780c88ab9ae96d1951fabac&units=metric&q=";
changeLoc("london");

function changeLoc(city) {
    var url = baseURL + city;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            disp(obj);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}



function disp(obj) {
    // Setting up icon
    var icon = obj.weather[0].icon;
    icon = icon.split("");
    var iNum = icon.slice(0,2).join("");
    var t = icon.slice(2,3).join("");
    if (t == "d") {iName = "wi-day-" + wiDay[owmIcons.indexOf(iNum)]}
    else {iName = "wi-night-" + wiNight[owmIcons.indexOf(iNum)]};
    var tag = "<i class='wi " + iName + "'></i>";

    // Displaying everything
    document.getElementById("loc").innerHTML = obj.name + ", " + obj.sys.country;
    document.getElementById("iconCurrent").innerHTML = tag;
    
    document.getElementById("tempCurrent").innerHTML = "&bullet;" + obj.main.temp + "&deg;";
    document.getElementById("tempMax").innerHTML = "&uarr;" + obj.main.temp_max + "&deg;";
    document.getElementById("tempMin").innerHTML = "&darr;" + obj.main.temp_min + "&deg;";
    
    document.getElementById("weCurrent").innerHTML = obj.weather[0].main;
    document.getElementById("humid").innerHTML = "Humidity: " + obj.main.humidity + "%";

    var sr = new Date(obj.sys.sunrise * 1000).toTimeString().substr(0,5);
    var ss = new Date(obj.sys.sunset * 1000).toTimeString().substr(0,5);

    document.getElementById("sunrise").innerHTML = sr;
    document.getElementById("sunset").innerHTML = ss;
}

// Pressing enter
function keyCode(event) {
    var charNo = event.charCode;
    if (charNo == 13) {
        changeLoc(document.getElementById('input').value);
    }
}