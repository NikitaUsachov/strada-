const form = document.forms[0]
const input = document.querySelector('input')

async function givRespons(event){
    event.preventDefault();
    const serverUrl = `https://swapi.dev/api/${input.value}`
    let response = await fetch(serverUrl)
    let responseText = await response.json()
    console.log(responseText)
    render(responseText)
}
function render(responseText){
    
}
form.addEventListener('submit', givRespons)