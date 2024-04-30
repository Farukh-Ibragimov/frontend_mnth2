console.log("Hello world");
var helloText = "welcome HTML, CSS, JavaScript, React/Redux"
console.log(helloText)

//типы данных

//1) string
var text = "fRonTenD"
console.log(text)

console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.length)
console.log(text.repeat(23))


//2) number
var number = 44
console.log(number)
//+, -, /, *
var number2 = 2
console.log(number2 % 2)
console.log(number2 ** 4)

var result = number / number2
console.log(result.toFixed())

var studentsAge = (23 + 16 + 17 + 17 + 16 + 23 + 14 + 12 + 18 + 22 + 14 + 35)/12
console.log(studentsAge)
// console.log(typeof number2.toString())
// console.log(Number("6"))

//3)boolean - true, false
// <, >, ==, !=, ===, !==, >=, <=
//&&, || - логические опператоры
console.log(5 !== "5")

// if, else if., else - условные констукции

// var login = "user@gmail.com"
// var password = "user"
//
// var userlogin = prompt("Enter login")
// var userpassword = prompt("Enter password")
//
// if (userlogin === login && userpassword === password){
//     alert("авторизация прошла успешно")
// }
// else {
//     alert("повторите попытку,введены неправильные данные")
// }


//
var userINN = 12345789012344
var INNString = String (userINN)[0]
// console.log(INNString)
if((INNString === "0" || INNString === "1" || INNString === "2") && userINN.toString().length === 14){
    console.log("ИНН найден")
}else {
    console.error("ИНН не найден")
}