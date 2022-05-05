import fetch from 'node-fetch';

var cityInput = document.getElementsByClassName('cityInput');
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=2ff41d70607b09fa349823714cb91710`;
var todayApiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=37.4516&lon=-77.6592&units=imperial&exclude=hourly,daily,minutely&appid=51a61d96cb3c110846e5130afe5ac605';
var current = document.getElementsByClassName("city");
const cityName = document.getElementById('cityName');
var city = document.getElementsByClassName('city');


var searchBtn = document.getElementById("searchBtn");


function appendData(data) {
    
    city.innerHTML = "City: " + data;
    console.log(cityInput.value);
    cityName.innerHTML = cityInput.value;
}

function getInfo() {

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            appendData(data);
    
        })  
}

current.innerHTML = 'City: ' + fetch(todayApiUrl)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (data) {
        appendData(data); 
 })


searchBtn.addEventListener('click', getInfo);
    





//     for( i=0; i<5; i++ ){
//         document.getElementById('day' + (i+1) + 'Humidity').innerHTML = 'Humidity:' + Number(data.list[i].main.humidity); 
//     }
//     for( i=0; i<5; i++ ){
//         document.getElementById('day' + (i+1) + 'Wind Speed').innerHTML = 'Wind Speed:' + Number(data.list[i].wind.speed); 
//     }
//     for( i=0; i<5; i++ ){
//         document.getElementsByClassName("img" + (i + 1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
//     }
// console.log(getInfo());
// .catch (err => alert("Something Went Wrong"))
// }


let date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let day = date.getDate();
let month = date.getMonth()  + 1;
let year = date.getFullYear();

// check day so you get today and the next 4 days
function CheckDay(day) {
    if(day + date.getDay() > 6){
        return day +date.getDay() - 7;
    } else {
        return day + date.getDay();
    }
}
// add days to boxes
for( i=0; i<5; i++ ) {
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}




