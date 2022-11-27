import { weatherPromise } from "./apiHandler";
import { weather5day } from "./apiHandler";

const forecastGrid = document.querySelectorAll(".forecastGrid");
const unitMode = "F";
const parseWeatherData = async () => {
  let parsedArray = [];
  const rawData = await weatherPromise;
  for (const property in rawData.main) {
    parsedArray.push(`${property}: ${rawData.main[property]}`);
  }
  document.getElementById("location").innerHTML = rawData.name;
  let cardTxt = document.createElement('p');
  let feelsTxt = document.createElement('p');
  let todayCard = document.getElementById("currentTemp");
  let snap = new Image();
  let condition = document.createElement('p');
  feelsTxt.innerHTML = "feels like " + rawData.main.feels_like;
  condition.innerHTML = rawData.weather[0].description;
  cardTxt.innerHTML = rawData.main.temp + "° " + unitMode;
  snap.src = "https://openweathermap.org/img/wn/" + rawData.weather[0].icon +"@2x.png"
  snap.classList.add("snap");
  todayCard.appendChild(cardTxt);
  todayCard.appendChild(condition);
  todayCard.appendChild(snap);
  todayCard.appendChild(feelsTxt);
  parsedArray.push(rawData.weather);
  console.log(parsedArray);
}
const fiveDay = async () => {
  let kickArray = [];
  const fiveData = await weather5day;
  for(let i = 0; i < 39; i+=8){
    kickArray.push(fiveData.list[i])
  }
  for(let i = 0; i < kickArray.length; i++){
    forecastGrid[i].innerHTML = kickArray[i].main.temp + "° " + unitMode;
    let fiveDaySnaps = new Image();
    fiveDaySnaps.src = "https://openweathermap.org/img/wn/" + kickArray[i].weather[0].icon +"@2x.png"
    forecastGrid[i].appendChild(fiveDaySnaps);
  }
  console.log(fiveData);
  console.log(kickArray);
}
parseWeatherData();
fiveDay();
