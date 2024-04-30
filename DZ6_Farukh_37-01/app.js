const counterInput = document.createElement('input')
counterInput.value = 0
const incrementButton = document.createElement('button')
incrementButton.innerHTML = '+'

const decrementButton = document.createElement('button')
decrementButton.innerHTML = '-'

const resetButton = document.createElement('button')
resetButton.innerHTML = 'Сбросить'

document.body.append(counterInput,incrementButton,decrementButton,resetButton)

let counterValue = 0
function updateCounter() {
    counterInput.value = counterValue
    if(counterValue > 0){
        counterInput.style.color = 'green'
    }else if(counterValue < 0){
        counterInput.style.color = 'red'
    }else{
        counterInput.style.color = 'gray'
    }
}

incrementButton.addEventListener('click',()=> {
    counterValue += 1
    updateCounter()
})
decrementButton.addEventListener('click',()=>{
    counterValue -= 1
    updateCounter()
})

resetButton.addEventListener('click',()=>{
    counterValue = 0
    updateCounter()
})

updateCounter()

//Пункт 2
const trafficLight = document.createElement("div")
trafficLight.style.display = "flex"
trafficLight.style.justifyContent = "center"
trafficLight.style.width = '50px'
trafficLight.style.flexWrap = 'wrap'
trafficLight.style.alignItems = "center"
trafficLight.style.height = "170px"
trafficLight.style.marginTop = '50px'

const redLight = document.createElement("div")
redLight.style.width = "50px"
redLight.style.height = "50px"
redLight.style.borderRadius = "50%"
redLight.style.backgroundColor = "red"
redLight.addEventListener("click", () => showMessage("Стоп"))

const yellowLight = document.createElement("div")
yellowLight.style.width = "50px"
yellowLight.style.height = "50px"
yellowLight.style.borderRadius = "50%"
yellowLight.style.backgroundColor = "yellow"
yellowLight.addEventListener("click", () => showMessage("Готовься"))

const greenLight = document.createElement("div")
greenLight.style.width = "50px"
greenLight.style.height = "50px"
greenLight.style.borderRadius = "50%"
greenLight.style.backgroundColor = "green"
greenLight.addEventListener("click", () => showMessage("Иди"))

const messageDisplay = document.createElement("div")
trafficLight.appendChild(redLight)
trafficLight.appendChild(yellowLight)
trafficLight.appendChild(greenLight)
document.body.appendChild(trafficLight)
document.body.appendChild(messageDisplay)
function showMessage(text) {
    messageDisplay.innerHTML = text
}
