
//while
var count = 0
while(count < 10) {
    console.log(count)
    count++
}
printDelimiter()

//for..of - array []
var children = [1994,2003,2021,2007,2010,2015,1998,2019,2018,2020,2024,1990]
var gifts = 0
for(var child of children){
    var childAge = 2024 - child
    if(childAge >= 3 && childAge <= 11){
        gifts++
    }
}
console.log(`Gift total - ${gifts} of ${children.length}`)

printDelimiter()

//for..in - object {}
var car = {
    brand:"Toyota",
    model:"Camry",
    year:"2024"
}

for(var key in car){
    console.log(`${key}:${car[key]}`)
}
printDelimiter()
// for(var value of Object.values(car)){
//
// }

var person = {
    firstname:"John",
    lastname:"Kim",
    age:30,
    address:{
        street:"123 Mo Sr",
        city: "NY",
        country:"USA"
    },
    hobbies:[
        "reading","cooking"
    ]
}
for(var key in person){
    if(typeof person[key] === "object"){
        for(var value in person[key]){
            console.log(`${key}.${value}: ${person[key][value]}`)
        }
    }else{
        console.log(`${key}: ${person[key]}`)
    }
}
printDelimiter()

//методы массива
var fruits = ["banana","orange","melon","chery"]
//1)push
fruits.push("raspberry")
//2)unshift
var fruitAdd = fruits.unshift("apple")

console.log(fruitAdd)
//3)shift
var firstFruit = fruits.shift()
console.log(firstFruit)
//4)pop
var lastfruit = fruits.pop()
console.log(fruits)
//5)join
var joinFruits = fruits.join()
console.log(joinFruits)
//6)splice
fruits.splice(1,2,)
console.log(fruits)
//7)slice
// var subArray = fruits.slice(1,3)

console.log(fruits)


var numbers = [10,20,30,40,50]
var sabArray = numbers.slice(1,3)
console.log(sabArray)

//функции
//function declaration
function printDelimiter() {
    console.log("-".repeat(60))
}
printDelimiter()
//function expression
var sayHello = function () {
    console.log("Hi")
}
sayHello()