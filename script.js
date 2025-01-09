// api url
const BASE_URL = "https://api.weatherapi.com/v1/current.json?key=43bdaf4efe3949e0bc5151325250801"

// elements we need
const input = document.querySelector(".city-name")
const conditionImg = document.querySelector("#condition-img")
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humid-percent")
const wind = document.querySelector(".wind-detail")

// logical variables

// functions that are needed
async function getWeather(name){
    const URL = `${BASE_URL}&q=${name.toUpperCase()}`;
    const response = await fetch(URL);
    const data = await response.json();
    if(response.status === 200){
        city.innerText = data.location.name;
        temp.innerHTML = `${data.current.temp_c}&deg;c`;  
        humidity.innerText = `${data.current.humidity}%`;
        wind.innerText = `${data.current.wind_kph}km/h`;
        conditionImg.src = `${data.current.condition.icon}`
        console.log(data.humdity)
    }
    else{
        console.log("an error occured")
    }
}
// event listeners
input.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        getWeather(input.value);
    }
});