const correspondence = document.querySelector('.correspondence')
const forms = document.forms[0]
const inputForm = document.querySelector('.input')
const api = 'https://edu.strada.one/api/user';
const sendBtn = document.querySelector('.get-pass')
const emailValue = document.querySelector('#valid-email')
const validKey = document.querySelector('#valid-key')
const enterBtn = document.querySelector('#enter')
const btnOut = document.querySelector('.out')
// иниализация template
const spanMsg = document.querySelector(".massage")
const newMsg = document.querySelector('.newMsg')
let token = getCookie('token');
const inputName = document.querySelector('#name')
let interMsg = document.querySelector('.interlocutor-message')
let myMsg = document.querySelector('.myMessage')
let socket;                
if(token){  
    Socket()    
    validation ()
} else {
    console.log('token is not')
    document.getElementById("my-modal0").classList.add("open")
}

function Socket(inputText) {
    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
    console.log('сокет запустил')
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        console.log('Получено сообщение от сервера', message);
        getHistoryMessage() 

    });

    // Обработка события закрытия соединения WebSocket
    socket.addEventListener('close', () => {
        console.log('Соединение WebSocket закрыто');
    });

    // Обработка события ошибки WebSocket
    socket.addEventListener('error', (error) => {
        console.error('Ошибка WebSocket:', error);
    });
}


async function sendMyMessage(event) {
    event.preventDefault();
    if (inputForm.value !== '') {
        const inputText = inputForm.value;
        const myMessageTemplate = document.querySelector('#my-message');
        const spanMassage = myMessageTemplate.content.querySelector('.massage');
        spanMassage.textContent = inputText;
        const clonedTemplate = document.importNode(myMessageTemplate.content, true);
        correspondence.appendChild(clonedTemplate);

        //отправка на сервер
        socket.send(JSON.stringify({ text: `${inputText}` }));
        Socket();
        inputForm.value = ''

    } else {
        alert('Введите что-нибудь для отправки');
    }
}



function printChatMessage(data) {
    newMsg.innerHTML = ''
    const messages = data.messages;


    messages.forEach((message) => {
        const email = message.user.email
        const name = message.user.name;
        const text = message.text;
        const time = message.createdAt
        const myEmail = getCookie('email')

        if (email === myEmail ){
            const myMessage = document.querySelector('#my-message')
            const spanName = myMessage.content.querySelector('.name')
            const spanText = myMessage.content.querySelector('.massage')
            spanName.textContent = name
            spanText.textContent = text
            const cloneMyMsg = myMessage.content.cloneNode(true)
            newMsg.append(cloneMyMsg)
        } else {
            const messageInter = document.querySelector('#message-template')
            const spanName = messageInter.content.querySelector('.name')
            const spanText = messageInter.content.querySelector('.massage')
            spanName.textContent = name
            spanText.textContent = text
            const clone = messageInter.content.cloneNode(true)
            newMsg.append(clone)
        }

    });
    console.log("Рендер выполнил")
    

}

async function postEmail(e) {
    e.preventDefault();
    let email = emailValue.value
    document.cookie = `email=${token}`
    if (email !== ''){
        
        await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ email }),
        });
        try {
            document.cookie = `email=${email}`
            console.log('email in cookie ')
            emailValue.value = ''
            // twoModalWindow()
            
        } catch (err) {
            alert('Неполадки на сервере, повтори позже')
        }
    } else {
        alert ('Email обязателен')
    }
    
}

function setCookie (e) {
    e.preventDefault()
    document.getElementById("my-modal2").classList.remove("open");
    token = validKey.value
    document.cookie = `token=${token}`
    console.log('кука сохранена')
    console.log('авторизация успешна')
    validation()
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

async function validation (){
    let userName = inputName.value
    let token = getCookie('token')
    console.log('токен из кук достал ок')
    let data = { name:userName };
    await fetch(api,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
    console.log(`все оки, привет ${userName}`)
    getHistoryMessage()

}

function getUserData() {
    const url = 'https://edu.strada.one/api/user/me';
    // let token = getCookie('token')
    // Отправка GET-запроса на эндпоинт
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            // Обработка успешного ответа
            if (response.ok) {
                return response.json();
            }
            // Обработка ошибочного ответа
            throw new Error('Ты не пройдееешь !!!. (Пройди регистрацию, либо введи корректный код)');
        })
        .then(data => {
            // Обработка полученных данных
            console.log(data);
        })
}

function getHistoryMessage() {
    const url = 'https://edu.strada.one/api/messages';
    // Отправка GET-запроса на эндпоинт
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            // Обработка успешного ответа
            if (response.ok) {
                return response.json();
            }
            // Обработка ошибочного ответа
            throw new Error('Ошибка получения истории');
        })
        .then(data => {
            // Обработка полученных данных
            console.log("я получил историю, передаю в рендер");
            // console.log(typeof data);
            // getUserData()
            printChatMessage(data)
        })
       
    Socket()
}


sendBtn.addEventListener('click',postEmail)
forms.addEventListener('submit',sendMyMessage)
enterBtn.addEventListener('click', setCookie)
//выход
btnOut.addEventListener('click', function (){
    document.cookie = "token=; expires=-1";
    document.cookie = "email=; expires=-1";
    location.reload()
})