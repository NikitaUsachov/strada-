const tabsContent = document.querySelectorAll('.tabs-content-item');
const tabsBtn = document.querySelectorAll('.tab-item');
const tabsBtns = document.querySelector('.tabs');
const form = document.forms[0]
const inputForm = document.querySelector('.weather-search-form-input')
const weatherNowDiv = document.querySelector(".weather-now")
let addedLocations = [{name: 'Samara'}]
const favouriteList = document.querySelector('.fav-list')
let responseText;

// let data = localStorage.getItem('addedLocations')
// if (data !== ''&& data !==null){
//     addedLocations = JSON.parse(data)
//     console.log('localstorage получен')
// }
const tabsBtnsHandler = (event) => {
    if (event.target.classList.contains('tab-item')) {
        const btnIndex = Array.from(tabsBtn).indexOf(event.target);
        tabsBtn.forEach(tab => tab.classList.remove('active-tab'));
        Array.from(tabsBtn)[btnIndex].classList.add('active-tab');
        tabsContent.forEach(block => block.classList.add('inactive-block'));
        Array.from(tabsContent)[btnIndex].classList.remove('inactive-block');
    }
}
async function initialization (event){
    event.preventDefault();
    // инициализация
    // ==================================================================================
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    let cityName = inputForm.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let response = await fetch(url)
    responseText = await response.json();
    renderLeftBlock(responseText)
}
function renderLeftBlock (responseText) {
    console.log(responseText.name)
    weatherNowDiv.innerHTML = '' //очистка формы
    weatherNowDiv.textContent = ''
    // рендер левого блока
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
    newButtonFavorite.addEventListener('click',addInArray)
}


// async function addWeather(event){
//     event.preventDefault();
//     // инициализация
//     // ==================================================================================
//     const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
//     let cityName = inputForm.value;
//     const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
//     let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
//     let response = await fetch(url)
//     let responseText = await response.json();
//     renderLeftBlock(responseText)
// function renderLeftBlock (responseText) {
    //     console.log(responseText.name)
    //     weatherNowDiv.innerHTML = '' //очистка формы
    //     weatherNowDiv.textContent = ''
    // // рендер левого блока
    // // =====================================================================================
    // // <div class="temperature">
    //     const newDivTemperature = document.createElement('div')
    //     newDivTemperature.className = 'temperature'
    //     newDivTemperature.textContent =  Math.round(responseText.main.temp- 273) + ' °C';
    //     weatherNowDiv.append(newDivTemperature)
    //     // <div class="precipitation">
    //     const newDivPrecipitation = document.createElement('div')
    //     newDivPrecipitation.className = 'precipitation'
    //     weatherNowDiv.append(newDivPrecipitation)
    //     // <img class="weather-now-precipitation-img" src="./assets/img/cloud.png" alt="precipitation">
    //     const icon = responseText.weather[0].icon;// получаем иконку код иконки
    //     const newImg = document.createElement('img')
    //     newImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    //     newImg.className = 'weather-now-precipitation-img'
    //     newImg.alt = 'precipitation'
    //     newDivPrecipitation.append(newImg)
    //     // <div class="selected-city-now">-->
    //     const newDivSelectedCity = document.createElement('div')
    //     newDivSelectedCity.className = 'selected-city-now'
    //     weatherNowDiv.append(newDivSelectedCity)
    //     // <p>Actobe</p>
    //     const newP = document.createElement('p')
    //     newP.textContent = responseText.name
    //     newDivSelectedCity.append(newP)
    //     // <button class = "favorite-btn"></button>
    //     const newButtonFavorite = document.createElement('button')
    //     newButtonFavorite.className = 'favorite-btn'
    //     newDivSelectedCity.append(newButtonFavorite)
    //     newButtonFavorite.addEventListener('click',addInArray)
    // }
    //     добавление локации в массивfunction
function addInArray(){
   let add = {name:responseText.name}
        addedLocations.push(add)
        console.log(addedLocations)
    // localStorage.setItem(name,JSON.stringify(addedLocations.name))
        renderRightBlock()
}
function renderRightBlock(){
    //рендер правого блока
        favouriteList.innerHTML = ''//очистка предидущих значений
        for (let i = 0; i < addedLocations.length; i++) {
            const newLi = document.createElement('li')
            newLi.textContent = addedLocations[i].name
            favouriteList.append(newLi)
            newLi.addEventListener('click',returnFavCity)

            async function returnFavCity() {
                console.log('ok')
                const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
                let cityName = addedLocations[i].name;
                const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
                let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
                let response = await fetch(url)
                responseText = await response.json();
                console.log(responseText)
                return  renderLeftBlock(responseText)

            }

            const newCloseBtn = document.createElement('button')
            newCloseBtn.textContent = 'x'
            newLi.append(newCloseBtn)
            newCloseBtn.addEventListener("click", ()=>{
                addedLocations.splice(i, 1);
                console.log(addedLocations)
                newLi.remove()
            })
        }
}

    inputForm.value = "";




form.addEventListener('submit', initialization)
tabsBtns.addEventListener('click', tabsBtnsHandler);



