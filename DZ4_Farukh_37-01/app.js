//Пункт 1
var averageNumber = (array) => {
    var sum = 0
    var count = 0
    for(var num of array){
        if(num > 0){
            sum += num
            count++
        }
    }
    var average = sum / count
    return `Среднее ариффметическое чисел: ${average}`
}
var array = [2, -78, 45, 4,-7,-6,-10, 26, 30, 8]
console.log(averageNumber(array))

//Пункт 2
var sumOfSquareOfTheNumber = (numbers) => {
    var squareSum = 0
    for (var num of numbers) {
        if (num % 2 === 0) {
            squareSum += num ** 2
        }
    }
    return squareSum
}


console.log(sumOfSquareOfTheNumber(array))

//Пункт 3
var textSeparation = (text) => {
    var resultText = []
    for(var i = 0; i < text.length;i++){
        if(text[i].toLowerCase().includes("t") && text[i].toLowerCase().includes("a")){
            resultText.push(text[i])
        }
    }
    return resultText
}
