// var experience = prompt("Сколько лет у Вас опыта?(в годах)")
// var developerLevel
// if(experience > 0 && experience <= 2){
//     developerLevel = "junior"
// }else if(experience >= 3 && experience <= 6) {
//    developerLevel = "middle"
// }else if(experience >=7 && experience <= 40){
//     developerLevel = "senior"
// }else {
//     developerLevel = "unknow"
// }
//
// console.log(`Ваш уровень в программировании ${developerLevel}`)


//switch..case
var month = prompt("Введите месяц")
switch (month) {
    case "декабрь" :
    case "январь" :
    case "февраль" :
        alert("Зима")
        break
    case "март" :
    case "апрель" :
    case "май" :
        alert("весна")
        break
    case "июнь" :
    case "июль" :
    case "август" :
        alert("лето")
        break
    case "сентябрь" :
    case "октябрь" :
    case "ноябрь" :
        alert("осень")
    default:
        alert("error")
}


//4)null
var name = null


//5)undefined
var surname


//NaN - not a number
var result = 23 / "text"
console.log(result)

//6)object
var courseGeeks = {
    name: "Geeks",
    foundingDate: 2017,
    address: {
        street: "Ibraimova",
        number: 103,
        building: null,
    },
    branches: true
}
console.log(courseGeeks)

//методы объекта
console.log(courseGeeks.address.number)
courseGeeks.studentsNumber = 1500

delete courseGeeks.studentsNumber
courseGeeks["branches"] = false
console.log(Object.keys(courseGeeks)) /*все ключи */
console.log(Object.values(courseGeeks)) /*все значения */
console.log(Object.entries(courseGeeks))  /*всё вместе */
console.log(courseGeeks.hasOwnProperty("foundingDate")) /*проверить на содержание */



//array
var array = [1,2,3,4,5,6, "text",null]
console.log(array[0])
console.log(array.length - 1)
console.log(array[6][2])
array[78] = 78
console.log(array[78])
 var matrix = [
     [1,2,3],
     [4,5,6],
     [7,8,9]
 ]
console.log(matrix[1][1])

//цикл for
for(var i = 0; i <= 10; i++) {
    console.log(i)
}
    //переменные коротокого обновления
    // var i = 0
    // i = i + 1
    // i += 1
    // i++
var numbers = [2,4,5,6,23,45]
for (var i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}
console.log(numbers)


for(var i = 10; i >= 1; i--){
    console.log(i)
}

var names = ["anna", "john","jack", "olivia", "aidar"]
var blacklist = ["anna","john"]

for(var i = 0; i < names.length; i++){
    if(blacklist.includes(names[i])){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`Welcome,dear guest ${names[i]}`)
}

