(()=>{"use strict";const e=fetch("https://api.openweathermap.org/data/2.5/weather?zip=37604&units=imperial&APPID=92e8bde80d10c60895c666edb58dd53b").then((e=>e.json())).catch((function(e){console.log("somethin is fucked "+e)}));e.then((e=>{console.log(e);for(const n in e.main){let t=document.createElement("p");t.innerHTML=`${n}: ${e.main[n]}`,document.getElementById("weatherData").appendChild(t)}})),(async()=>{let n=[];const t=await e;for(const e in t.main)n.push(`${e}: ${t.main[e]}`);document.getElementById("location").innerHTML=t.name;let a=document.createElement("p"),o=document.getElementById("currentTemp"),c=new Image,i=document.createElement("p");i.innerHTML=t.weather[0].description,a.innerHTML=t.main.temp+"° F",c.src="https://openweathermap.org/img/wn/"+t.weather[0].icon+"@2x.png",c.classList.add("snap"),o.appendChild(a),o.appendChild(i),o.appendChild(c),n.push(t.weather),console.log(n)})()})();