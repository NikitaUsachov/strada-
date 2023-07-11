const correspondence = document.querySelector(".correspondence");
const forms = document.forms[0];
const inputForm = document.querySelector(".input");
const api = "https://edu.strada.one/api/user";
const sendBtn = document.querySelector(".get-pass");
const emailValue = document.querySelector("#valid-email");
const validKey = document.querySelector("#valid-key");
const enterBtn = document.querySelector("#enter");
// иниализация template
const myMessage = document.querySelector("#my-message");
const spanMsg = myMessage.content.querySelector("span");
let msg;
function printMyMessage(event) {
    event.preventDefault();
    // дубликат узла
    if (inputForm.value !== "") {
        spanMsg.textContent = inputForm.value;
        msg = myMessage.content.cloneNode(true);
        correspondence.append(msg);
        inputForm.value = "";
    } else alert("введи что нибудь для отправки");
}
async function postEmail(e) {
    e.preventDefault();
    let email = emailValue.value;
    await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({
            email
        })
    });
    try {
        emailValue.value = "";
        alert("Код отправлен, проверь почту");
    } catch (err) {
        alert("Неполадки на сервере, повтори позже");
    }
}
function setCookie(e) {
    e.preventDefault();
    const token = validKey.value;
    document.cookie = `token=${token}`;
    console.log("кука сохранена");
    validation();
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
async function validation() {
    let token = getCookie("token");
    let data = {
        name: "Nikita"
    };
    await fetch(api, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
}
function getUserData() {
    const url = "https://edu.strada.one/api/user/me";
    // let token = getCookie('token')
    // Отправка GET-запроса на эндпоинт
    fetch(url, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzYS1uaWtpdGFAeWFuZGV4LnJ1IiwiaWF0IjoxNjg4MzIzNTU0LCJleHAiOjE2OTE5MTk5NTR9.KkR4yhRZCn1HA2aNnIwUdXHbqTRPUjuxCCEVj6qOCHM"
        }
    }).then((response)=>{
        // Обработка успешного ответа
        if (response.ok) return response.json();
        // Обработка ошибочного ответа
        throw new Error("Ошибка при выполнении запроса.");
    }).then((data)=>{
        // Обработка полученных данных
        console.log(data);
    }).catch((error)=>{
        // Обработка ошибок
        console.error(error);
    });
}
getUserData();
console.log(getCookie("token"));
sendBtn.addEventListener("click", postEmail);
forms.addEventListener("submit", printMyMessage);
enterBtn.addEventListener("click", setCookie);

//# sourceMappingURL=index.672d4772.js.map
