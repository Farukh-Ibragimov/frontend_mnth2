const regExp = /^[0-9]+$/
const containsOnlyDigits = (str) => {
    return regExp.test(str)
}
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

 const seconds = ()=>{setInterval(()=>{
     console.log("Прошла секунда")
 },1000)}
seconds()

const count = ()=>{
    let i = 1
    const interval = setInterval(()=>{
        i++
        console.log(i)
        if(i === 10){
            clearInterval(interval)
        }
    },1000)
}
count()

const button = document.querySelector('button')
button.onclick = (event)=>{
    if(event.target.classList.contains('red')){
        event.target.classList.remove('red')
    }else{
        event.target.classList.add('red')
    }
}

const data = new XMLHttpRequest()
data.open('GET','data.json')
data.setRequestHeader('Content-type','application/json')
data.send()
data.onload = ()=>{
    const myData = JSON.parse(data.response)
    console.log(myData)
}
