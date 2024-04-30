const userNumber = document.querySelector('#userNumber')
const checkButton = document.querySelector('#checkButton')
const message = document.querySelector('#message')
let attempts  = 0
const randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
checkButton.addEventListener('click',  checking = ()=>{


    if(userNumber < 1 || userNumber > 100){
        message.innerText = 'Введите число от 1 до 100'
    }else {
        attempts++
        if (userNumber.value < randomNumber) {
            message.innerText = 'Загаданное число больше'
            message.style.color = 'green'
        } else if (userNumber.value > randomNumber) {
            message.innerText = 'Загаданное число меньше'
            message.style.color = 'red'
        } else {
            message.innerText = `Вы угадали число ,колличество Ваших попыток ${attempts}`
            message.style.color = 'blue'
        }
    }
    userNumber.value = ''
})

window.onkeydown = (event)=> {
    //console.log(event.code)
    if(event.code ==='Enter'){
        checking()
    }
}
