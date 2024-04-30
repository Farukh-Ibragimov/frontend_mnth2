//callback
function sayHello() {
    console.log("hello world")
}

setTimeout(sayHello, 5000)

console.log("hi")

//filter
var array = [16,23,45,56,46,30]
var filteredArray =array.filter((num ) => num % 2 === 0)
console.log(filteredArray)


var products = [
    {name:"Ноутбук",price:900,category:"Электроника",available:true},
    {name:"Смартфон",price:500,category:"Электроника",available:true},
    {name:"Фотоаппрарат",price:1800,category:"Фото и видео",available:true},
    {name:"Кофемашина",price:1500,category:"Электроника",available: false},
]
var filteredProducts = products.filter((product) => product.available === true && product.category === "Электроника" && product.price < 1000)
console.log(filteredProducts)

//map
var numbers = [2,3,4,5]
var maping = numbers.map((i) => i * 2)
console.log(maping)

var dollars = [2300,4500,5600,780000]
var newArray = dollars.map((dollar)=> dollar / 89)
var newArray2 = newArray.map((sum) => sum.toFixed(1))
console.log(newArray2)

//forEach
var numbers2 = [2,3,4,11,7,10]
numbers2.forEach((number,i) => console.log(number * i))

//sort
var fruits = ["яблоко","аппелсин","груша","банан"]
fruits.sort((a,b)=> b.localeCompare(a))//для того чтобы было от "я" до "а"

console.log(fruits)
numbers2.sort((num1,num2) =>num1 - num2)//для двузначных чисел
console.log(numbers2)

//ES6
//var text
let name = "name"
name = 40
console.log(name)
const array2 = []
//array = "jfsjhdfhsd"
array2.push(4)
console.log(array2)


//rest прарамметры
function getAllSum(...numbers) {
    console.log(numbers)
    let sum = numbers.reduce((a,b)=>a += b)
    console.log(sum)
}
getAllSum(4,4,4)

// ... - spread опператор
const{name2,...rest} = {name2:"Jack",age:30,gender:"male",city:"NY"}
console.log(rest)
const array1 = [1,2,3]
const array3 = [4,5,6]
const array4 = [...array1,...array3]
console.log(array4)

function findMax(...array) {
    return Math.max(...array)
}

console.log(findMax(30,10,40,43))


// console.log(new Date.now())

//default params
function calculateRectangle(width =20,hight = 20,unit = "m") {
    const area = width * hight
    console.log(`Площадь прямоугольника ${area} ${unit}`)
}

calculateRectangle(20)


let numbers34 = 6
console.log(typeof numbers34)