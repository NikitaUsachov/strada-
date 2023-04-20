let buttonResult = document.getElementById('resButton');
function calc (){
    let operations = document.getElementById('operations').value
    let inputOneNum = document.getElementById('oneNumber').value
    let inputTwoNum = document.getElementById('twoNumber').value

    switch (operations){
        case 'sum':
            return parseInt(inputOneNum) + parseInt(inputTwoNum)
        case 'min':
            return  parseInt(inputOneNum) - parseInt(inputTwoNum)
        case  'mult':
            return  parseInt(inputOneNum) * parseInt(inputTwoNum)
        case  'divide':
            return  parseInt(inputOneNum) / parseInt(inputTwoNum)
    }
}

function buttonClickHandler (){
    document.getElementsByClassName('result')[0].textContent = calc();
}


buttonResult.addEventListener('click',buttonClickHandler)