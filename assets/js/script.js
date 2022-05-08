
// todays weather
var todayApiUrl =
  "https://api.openweathermap.org/data/2.5/onecall?lat=37.4516&lon=-77.6592&units=imperial&exclude=hourly,daily,minutely&appid=51a61d96cb3c110846e5130afe5ac605";
// where the city name show up under the search button
const cityName = document.getElementById("cityName");

// the search button
var searchBtn = document.getElementById("searchBtn");
// the entire form for search input container
var search = document.querySelector('.search');


function getInfo(e) {
    e.preventDefault();
    // where the user inputs the city
    var cityInput = document.querySelector(".cityInput");
    // the users input
    var city = cityInput.value
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ff41d70607b09fa349823714cb91710`;
  // store city input value (city)
  localStorage.setItem("city",JSON.stringify(city));
  var stored = JSON.parse(localStorage.getItem("city"));
  cityName.append(stored);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var humidity = (data.main.humidity);
      // api temp is in kelvin 
      var celTemp = (data.main.temp);
      // convert kelvin to fahrenheit
      var fTemp = Math.round((((celTemp - 273.15) * 9) / 5) + 32) + "°";
      // wind speed
      var wind = (data.wind.speed);
      // uv index
      // var uvIndex = (data.)
      var icon = (data.weather[0].icon);
      cityName.innerHTML = city;
      // where todays city/weather shows up in the large box
      var cityBox = document.querySelector(".city");
      // have city show up in citybox
      cityBox.innerHTML = 'City: ' + city + ' ' + today + '</br>' + "Temperature: " + fTemp + '</br>' + 'Wind Speed: ' + wind + '</br>' + "Humidity: " + humidity + '</br>' + 'UV Index: ' ;
    });
    
}

    


search.addEventListener("submit", getInfo);

// console.log(getInfo());
// .catch (err => alert("Something Went Wrong"))
// }
let date = new Date();
let today = '(' + (date.getMonth()+1) + ' / ' + date.getDate() + ' / ' + date.getFullYear() + ')';
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// date for today
let day = date.getDate();
// date to change dates in boxes
let boxDay = date.getDate();

// let day1 = document.getElementById('day1');
// day1.innerHTML = today;
// document.getElementById("day1" + (i + 1)).innerHTML = today[CheckDay(i)];

// check day so you get today and the next 4 days
function CheckDay(day) {
  if ((day + 1) + date.getDay() > 6) {
    // add 1 to start on tomorrow
    return (day+1) + date.getDay() - 7;
  } else {
    return day + date.getDay();
  }
}
// bottom 5 boxes
function boxInfo() {
    // add days of week and date to boxes
  for (let i = 0; i < 5; i++) { 
      // the issue with every other box showing is on this line. Probably in (i + 1).----- weekday[CheckDay(i++)] add correct date
        document.getElementById("day" + (1+i)).innerHTML = weekday[CheckDay(i++)] + '</br>' +
            (boxDay = '(' + (date.getMonth() + 1) + ' / ' + (date.getDate() + i++) + ' / ' + date.getFullYear() + ')') + '</br>' +
            'Temp: ' + '</br>' + `Wind Speed: ` + '</br>' + 'Humidity: ' + '</br>' + "UV Index: ";
    }

}
boxInfo()

// for (i = 0; i < 5; i++) {
//   document.getElementById('day' + (i + 1) + 'Humidity').innerHTML = 'Humidity:' + Number(data.list[i].main.humidity);
// }
// for (i = 0; i < 5; i++) {
//   document.getElementById('day' + (i + 1) + 'Wind Speed').innerHTML = 'Wind Speed:' + Number(data.list[i].wind.speed);
// }
// for (i = 0; i < 5; i++) {
//   document.getElementsById("day" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
// }


