(()=>{"use strict";const e=fetch("https://api.openweathermap.org/data/2.5/weather?zip=37604&units=imperial&APPID=92e8bde80d10c60895c666edb58dd53b").then((e=>e.json())).catch((function(e){console.log("somethin is fucked "+e)})),n=fetch("https://api.openweathermap.org/data/2.5/forecast?zip=37604&appid=92e8bde80d10c60895c666edb58dd53b&units=imperial").then((e=>e.json())).catch((function(e){console.log("somethin is fucked "+e)})),t=document.querySelectorAll(".forecastGrid");(async()=>{let n=[];const t=await e;for(const e in t.main)n.push(`${e}: ${t.main[e]}`);document.getElementById("location").innerHTML=t.name;let a=document.createElement("p"),o=document.createElement("p"),i=document.getElementById("currentTemp"),c=new Image,p=document.createElement("p");o.innerHTML="feels like "+t.main.feels_like,p.innerHTML=t.weather[0].description,a.innerHTML=t.main.temp+"° F",c.src="https://openweathermap.org/img/wn/"+t.weather[0].icon+"@2x.png",c.classList.add("snap"),i.appendChild(a),i.appendChild(p),i.appendChild(c),i.appendChild(o),n.push(t.weather),console.log(n)})(),(async()=>{let e=[];const a=await n;for(let n=0;n<39;n+=8)e.push(a.list[n]);for(let n=0;n<e.length;n++){t[n].innerHTML=e[n].main.temp+"° F";let a=new Image;a.src="https://openweathermap.org/img/wn/"+e[n].weather[0].icon+"@2x.png",t[n].appendChild(a)}console.log(a),console.log(e)})()})();