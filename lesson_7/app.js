//ООП
class Rectangle{
    width
    height

    constructor(width,height) {
        this.width = width
        this.height = height
    }

    calArea (){
        return this.width * this.height
    }
}

const rect1 = new Rectangle(5,4)
console.log(rect1.calArea())

class Rectangle2 extends  Rectangle{
    constructor() {
        super();
    }
}

//todo_list
const input = document.querySelector('input')
const createButton = document.querySelector('#create_button')
const todo_list = document.querySelector('#todo_list')
const creatTODO = () =>{
    if(input.value.trim() === ''){
        return alert('Заполните это поле')
    }
    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButton = document.createElement('div')
    divButton.className = 'div_button'

    const  text = document.createElement('h3')
    text.classList.add('text')

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete_button'

    const editButton = document.createElement('button')
    editButton.className = 'edit_button'

    deleteButton.innerText = 'delete'
    editButton.innerText = 'edit'
    text.innerText = input.value

    divButton.append(deleteButton,editButton)
    div.append(text,divButton)

    todo_list.prepend(div)
    input.value = ''
    deleteButton.onclick = ()=> div.remove()
    editButton.onclick = ()=> {
        const editText = prompt(`Edited ${text.innerText}`)
        editText.trim() === '' ? alert('Нельзя менять на пустоту ') : text.innerText = editText
    }
    text.addEventListener('click', ()=> text.classList.toggle('toggle'))
}

createButton.onclick = ()=> {creatTODO()}
window.onkeydown = (event)=> {
    //console.log(event.code)
    if(event.code ==='Enter'){
        creatTODO()
    }
}


