// console.dir(document.body.style.backgroundColor = "silver")
//
// const myDiv = document.getElementById("myDiv")
// const myButton = document.getElementById("myButton")
// myButton.addEventListener('click', ()=> {
//     myDiv.innerHTML = `<p>Привет, мир</p>`
// })
//
// const text1 = document.querySelector('.text') // class
// const text2 = document.querySelectorAll('.text') //allClass
// const text3 = document.querySelector('#text') //id
// const text4 = document.querySelector('h1') //
// console.log(text2)
// text2[1].style.color = "red"
//
// //style
// const styleDiv = document.createElement('div')
// const button = document.createElement('button')
// button.innerHTML = 'click'
//
// const body = document.bodyds
// body.append(styleDiv, button)

//add blog
// const button = document.querySelector('button')
function addBlogPost(){
    const titleInput = document.querySelector('#title')
    const contentInput = document.querySelector('#content')
    const blog = document.querySelector('#blog-posts')
    if(titleInput.value && contentInput.value){
        const article = document.createElement('article')
        article.innerHTML = `
        <h2>${titleInput.value} </h2>
        <p>${contentInput.value} </p>
        `;
        blog.appendChild(article)
        console.log(blog)
        titleInput.value = ''
        contentInput.value = ''
    }else{
        alert('Заполните все поля')
    }
}

// button.addEventListener('click', ()=> addBlogPost())
// button.onclick = ()=> addBlogPost()


// button.addEventListener('click', ()=>{
//     styleDiv.style.backgroundColor = "black"
//     styleDiv.style.width = "400px"
//     styleDiv.style.height = '400px'
//     styleDiv.style.margin = '15px'
// })

//тернарные опператоры

const findMax = (num1,num2)=> console.log(num1 > num2 ? num1 : num2)
findMax(9,6)

//form
const myForm = document.getElementById('myForm')

myForm.addEventListener('submit',function (event) {

    event.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    console.log(`Имя: ${name}`)
    console.log(`Почта: ${email}`)
    
    name.value = ''
    email.value =''
})
