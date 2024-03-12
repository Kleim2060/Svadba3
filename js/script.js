console.log(localStorage.getItem('data'), typeof(localStorage.getItem('data')))

if(localStorage.getItem('data') != "1"){
    let btn_start = document.querySelector('.color__button')
    let btn_message = document.querySelector('.message__btn')
    let question = document.querySelector('.question')
    let message = document.querySelector('.message')

    btn_start.addEventListener('click', viktorina);
    btn_message.addEventListener('click', message_function);
    function viktorina(){
        btn_start.classList.add('checked')
        question.classList.add('active')
        localStorage.setItem('data', 1)
    }

    function message_function(){
        btn_message.classList.add('checked')
        message.classList.add('active')
    }
}
if(localStorage.getItem('data') == "1"){
    let btn_start = document.querySelector('.color__button')
    let btn_message = document.querySelector('.message__btn')
    let question = document.querySelector('.question')
    let message = document.querySelector('.message')

    btn_start.classList.add('checked')
    question.classList.add('active')

    function message_function(){
        btn_message.classList.add('checked')
        message.classList.add('active')
    }
}

