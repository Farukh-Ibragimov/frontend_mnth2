const div = document.createElement('div')
div.className = 'square'
document.body.append(div)
const randomColor = ()=> {return '#' + Math.floor(Math.random() * 16777215).toString(16)}
console.log(randomColor())
div.addEventListener('click', ()=>{
    div.style.backgroundColor = randomColor()
    if(randomColor().includes('f')) return alert('Игра окончена')
})