let buttonResult = document.getElementById('resButton');
let result;
let inputOneNum;
let inputTwoNum;
function calc (){
    let operations = document.getElementById('operations').value
    inputOneNum = document.getElementById('oneNumber').value
    inputTwoNum = document.getElementById('twoNumber').value
    switch (operations) {
            case 'sum':
                return parseInt(inputOneNum) + parseInt(inputTwoNum)
            case 'min':
                return parseInt(inputOneNum) - parseInt(inputTwoNum)
            case  'mult':
                return parseInt(inputOneNum) * parseInt(inputTwoNum)
            case  'divide':
                return parseInt(inputOneNum) / parseInt(inputTwoNum)
    }
}
function buttonClickHandler (){
    try {

        let result = document.getElementsByClassName('result')[0].textContent = calc();
        let newElement = document.createElement('div');
        newElement.textContent = result
        newElement.classList.add('saveResult')
        newElement.addEventListener('click', function () {
            this.parentNode.removeChild(this)
        })
        document.body.appendChild(newElement);
    }
    catch (err){
        alert("ошибка в коде");
    }
}


buttonResult.addEventListener('click',buttonClickHandler);