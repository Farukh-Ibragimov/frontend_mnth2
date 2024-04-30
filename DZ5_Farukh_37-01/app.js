//Пункт 1
const tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']

const tagsCount = {
}
for(var element of tags){
    if (tagsCount[element]){
        tagsCount[element]++
    }else {
        tagsCount[element] = 1
    }
}

const sortedTagCount = Object.entries(tagsCount).sort((n1,n2)=>n1 - n2 )
console.log(sortedTagCount)

//Пункт 2

const resultDate =  (lastname, firstname, patronymic) => {
    const firstName1 = firstname[0].toUpperCase()
    const patronymic1 = patronymic[0].toUpperCase()
    const shortName = `${lastname}.${firstName1}.${patronymic1}`
    return shortName
}

console.log(resultDate("Бекова", "Айдана", "Бековна"))

//Пункт 3
function booksSeparate(...array) {
    const neededBook = array.filter((book1)=> book1.toLowerCase().includes("у") )
    const book = array.filter(book => !book.toLowerCase().includes('у'));
    console.log(neededBook)
    console.log(book)
}
//
const  users = [
    {name: "Farid", birthDate: "2011-05-15"},
    {name: "Giaz", birthDate: "2007-10-20"},
    {name: "Salavat", birthDate: "2006-03-08"},
    {name: "Islam", birthDate: "2007-12-03"},
    {name: "Chyngyz", birthDate: "2006-07-25"}
]
const user = users.map((person)=> console.log(`Пользователь ${person.name} родился ${person.birthDate}`))
