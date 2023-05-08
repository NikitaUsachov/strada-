const form = document.forms[0];
const inputName = document.getElementById('input');
const answer = document.getElementById("answer")



async function detectName (event) {
    event.preventDefault();
    const firstName = inputName.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    let response = await fetch(url)
    // console.log(response)
    let responseText = await response.json();
    console.log(responseText)
    const newDiv = document.createElement('div');
    newDiv.textContent = responseText.name + " is " + responseText.gender
    newDiv.className = 'newDiv'
    answer.append(newDiv)


}

form.addEventListener('submit',detectName)

