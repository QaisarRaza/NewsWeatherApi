const inp = document.querySelector("#input");
const search = document.querySelector("#search");
const weathercard = document.querySelector(".weathercard");
 console.log(inp);
const apikey = "a0e78d3b449db7059df0a38abd3952f8";
search.addEventListener('click', () => {
    const cityInput = inp.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${apikey}`)
        .then(res => res.json())
        .then(data => {
            inp.value = " ";
            weathercard.innerHTML = `
                    <p>${data.weather[0].description}</p>
                    <h1>${data.name}</h1>
                    <h2>${data.main.temp}°c</h2>
                    `;
        });

});