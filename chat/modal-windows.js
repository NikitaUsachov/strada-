// Открыть первое модальное окно
document.getElementById("open-modal-btn0").addEventListener("click", function() {
    document.getElementById("my-modal0").classList.add("open")
})

// Закрыть первое модальное окно
document.getElementById("close-my-modal-btn0").addEventListener("click", function() {
    document.getElementById("my-modal0").classList.remove("open")
})


// Модалка с регистрацией
// Открыть модальное окно
document.getElementById("send-name").addEventListener("click", function(e) {
    e.preventDefault()
    document.getElementById("my-modal0").classList.remove("open")
    document.getElementById("my-modal1").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn1").addEventListener("click", function() {
    document.getElementById("my-modal1").classList.remove("open")
})


//Модалка с вводом кода
// Открыть второе модальное окно
document.getElementById("open-modal-btn2").addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("my-modal1").classList.remove("open");
    document.getElementById("my-modal2").classList.add("open");
})

// Закрыть второе модальное окно
document.getElementById("close-my-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})
