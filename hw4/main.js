const wrapper = document.querySelector('.wrapper')

const characters = new XMLHttpRequest()
characters.open('GET','persons.json')
characters.setRequestHeader('Content-type','application/json')
characters.send()
characters.onload = ()=>{
    const data = JSON.parse(characters.response)
    data.forEach((person)=>{
        const card = document.createElement('div')
        card.innerHTML = `
<div class="person_photo">
<img src="${person.photo}" alt="${person.name}">
</div>
<h3>${person.name}</h3>
<span class="age">age:${person.age}</span>`
        card.setAttribute('class','card')
        wrapper.append(card)
    })
}

const data = new XMLHttpRequest()
data.open('GET', 'data.json')
data.setRequestHeader('Content-type','application/json')
data.send()
data.onload = ()=>{
    const myData = JSON.parse(data.response)
    console.log(myData)
}