//Пункт 1
var numbers = [34, 65, 67, 89, 8, 9, 23, 21, 10, 23, 28]
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}
//Пункт 2
var cinema = {
    kungFuPanda4: {
        genre: "comedy",
        premiereDate: "2024-03-8",
        runningTime: "94 minutes",
        mainActors: [
            "Jack Black",
            "Awkwafina",
            "Bryan Cranston",
            "James Hong",
            "Ian McShane",
            "Ke Huy Quan",
            "Dustin Hoffman",
            "Viola Davis"
        ],
        price: 250,
        dimension: "3D"
    },
    oppenheimer: {
        genre: "epic biographical thriller",
        premiereDate: "2023-07-11",
        runningTime: "180 minutes",
        mainActors: [
            "Cillian Murphy",
            "Emily Blunt",
            "Matt Damon",
            "Robert Downey Jr.",
            "Florence Pugh",
            "Josh Hartnett",
            "Casey Affleck",
            "Rami Malek",
            "Kenneth Branagh"
        ],
        price: 350,
        dimension: "2D"
    }
}

console.log(Object.entries(cinema))

//Пункт 3
var number = prompt("Enter any number up to 15")
switch (Number(number)) {
    case 1 :
        console.log("I")
        break
    case 2:
        console.log("II")
        break
    case 3:
        console.log("III")
        break
    case 4:
        console.log("IV")
        break
    case 5:
        console.log("V")
        break
    case 6:
        console.log("VI")
        break
    case 7:
        console.log("VII")
        break
    case 8:
        console.log("VIII")
        break
    case 9:
        console.log("IX")
        break
    case 10:
        console.log("X")
        break
    case 11:
        console.log("XI")
        break
    case 12:
        console.log("XII")
        break
    case 13:
        console.log("XIII")
        break
    case 14:
        console.log("XIV")
        break
    case 15:
        console.log("XV")
        break
    default:
        console.log("error")
}