const tabsContent = document.querySelectorAll('.tabs-content-item');
const tabsBtn = document.querySelectorAll('.tab-item');
const tabsBtns = document.querySelector('.tabs');
const form = document.forms[0]
const inputForm = document.querySelector('.weather-search-form-input')
const weatherNowDiv = document.querySelector(".weather-now")


const tabsBtnsHandler = (event) => {
    if (event.target.classList.contains('tab-item')) {
        const btnIndex = Array.from(tabsBtn).indexOf(event.target);
        tabsBtn.forEach(tab => tab.classList.remove('active-tab'));
        Array.from(tabsBtn)[btnIndex].classList.add('active-tab');
        tabsContent.forEach(block => block.classList.add('inactive-block'));
        Array.from(tabsContent)[btnIndex].classList.remove('inactive-block');
    }
}
function renderOnPage (){



}
async function addWeather(event){
    event.preventDefault();
    
    // инициализация
    // ==================================================================================
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = inputForm.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let response = await fetch(url)
    let responseText = await response.json();
    console.log(responseText)
    // рендер блока
    // =====================================================================================
    // <div class="temperature">
    const newDivTemperature = document.createElement('div')
    newDivTemperature.className = 'temperature'
    newDivTemperature.textContent =  Math.round(responseText.main.temp- 273) + ' °C';
    weatherNowDiv.append(newDivTemperature)
    // <div class="precipitation">
    const newDivPrecipitation = document.createElement('div')
    newDivPrecipitation.className = 'precipitation'
    weatherNowDiv.append(newDivPrecipitation)
    // <img class="weather-now-precipitation-img" src="./assets/img/cloud.png" alt="precipitation">
    const icon = responseText.weather[0].icon;// получаем иконку код иконки
    const newImg = document.createElement('img')
    newImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    newImg.className = 'weather-now-precipitation-img'
    newImg.alt = 'precipitation'
    newDivPrecipitation.append(newImg)
    // <div class="selected-city-now">-->
    const newDivSelectedCity = document.createElement('div')
    newDivSelectedCity.className = 'selected-city-now'
    weatherNowDiv.append(newDivSelectedCity)
    // <p>Actobe</p>
    const newP = document.createElement('p')
    newP.textContent = responseText.name
    newDivSelectedCity.append(newP)
    // <button class = "favorite-btn"></button>
    const newButtonFavorite = document.createElement('button')
    newButtonFavorite.className = 'favorite-btn'
    newDivSelectedCity.append(newButtonFavorite)
    inputForm.value = "";


}
form.addEventListener('submit', addWeather)
tabsBtns.addEventListener('click', tabsBtnsHandler);
    
