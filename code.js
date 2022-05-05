function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#temperature-description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "ae4d57dcc66c7ba5d091a7134d0d8f69";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let now = new Date();
let paragraph = document.querySelector("#paragraph-Input");
let hour = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
paragraph.innerHTML = `${day}, ${hour}:${minutes}`;

let form = document.querySelector("#searchCity");
form.addEventListener("submit", search);

search("Peterborough");
