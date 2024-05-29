//1)
const extractNumbers= (str) =>{
    const regExp = /\d+/g
    const matchNumbers = str.match(regExp)

    return matchNumbers ? matchNumbers.map(Number) : []
}
const string = "В 2024 году было 42 события, а в 2025 - уже 57!"
const numbers = extractNumbers(string)
console.log(numbers)

//2)Fibonacci
const fibonacci = (n)=>{
    const fibonacci = [0,1]
    if(n < 144){
        for(let i = 2;i < n;i++){
            fibonacci[i]= fibonacci[i - 1] + fibonacci[i - 2]
        }
    }
    return console.log(fibonacci)
}

//3)
const responseData = async ()=>{
    try {
        const response = await fetch(' https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(post=>{
            console.log(post.title)
        })
    }catch (error){
        console.log(error)
    }
}
responseData()

//4
const buttons = document.querySelector('.color_button')

buttons.onclick = (event)=>{
 if(event.target.tagName === 'BUTTON'){
     const color = event.target.classList
     document.body.style.backgroundColor = color
 }
}

//5)
const btnBlock = document.querySelector('.btn_block')
const block = document.querySelector('.block')

btnBlock.onclick= ()=>{
    if(block.classList.contains('active_block')){
        block.classList.remove('active_block')
    }else{
        block.classList.add('active_block')
    }
}


//6
const number = document.querySelector('.number')

let count  = 1

const interval = setInterval(()=>{
count++
number.innerHTML = count
    if(count === 100){
     clearInterval(interval)
    }
 },100)


//7
const button = document.querySelector('.json')

const getData = async (data)=>{
  try{
      const response = await fetch(data)
      const jsondata = await response.json()
      console.log(jsondata)
  }catch (error){
      console.log(error)
  }
}
button.onclick(getData(data))