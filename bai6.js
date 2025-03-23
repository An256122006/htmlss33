const weatherData = [
    {
        city:"Hà Nội",
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    {
        city:"Hồ Chí Minh",
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    {
        city:"Đà Nẵng",
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
];
let div = document.getElementById("body");
let inputs = document.getElementById("input");
let bn = document.getElementById("btn");
bn.onclick=function(){
    let inputvalue=inputs.value;
    let weather=weatherData.filter(element=>element.city==inputvalue);
    div.innerHTML="";
    weather.forEach(element => {
        div.innerHTML=`<div class="row">
        <h2>${element.city}</h2>
        <div class="row1">
        <div class="icon">${element.icon}</div>
        <div class="do">${element.temperature}&deg;c</div>
        <div><p>${element.description}</p>
        <p> do am:${element.humidity}%</p>
        <p>toc do gio:${element.windSpeed}km/h</p></div></div></div>`
    });
}