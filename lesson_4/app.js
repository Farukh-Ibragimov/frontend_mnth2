//параметры функции

function addNumber(num1, num2) {
    return num1 + num2
}

function substrackNumber(num1, num2) {
    return num1 - num2
}

function divide(num1, num2){
    if(num2 !== 0){
       return  num1 / num2
    }else{
        return "error"
    }
}

console.log(`Сумма - ${addNumber(2,5)}`)
console.log(`Разность - ${substrackNumber(5,5)}`)
console.log(`Частное - ${divide(5,5)}`)

function findMaxNum(array){
    var max = array[0]
    for(var num of array){
        if(max < num){
            max = num
        }
    }
    return max
}

console.log(findMaxNum([2,3,55,67,3]))

//arrow-function
var addNum = (n1,n2) => n1 + n2

var sumArray = (array) => {
    var sum = 0
    for(var i = 0; i < array.length;i++){
        sum += array[i]
    }
    return sum
}
console.log(sumArray([1,1,1]))


var object = {
    john: 3000,
    jane:1200,
    tim:5000,
    alice:3500
}

function calculateTotalSalary(object) {
    var totalSalary = 0
    for(var key in object){
        totalSalary += object[key]
    }
    return totalSalary
}

console.log(`total salary - ${calculateTotalSalary(object)}`)

