//1
var files = [
    'document.txt', 'image.png', 'screenshot.jpeg',
    'document2.txt', 'textfile.txt', 'picture.png'
]
var txt = []
for(var i = 0; i < files.length; i++){
    if(files[i].includes('txt')){
        txt.push(files[i])
    }
}
console.log(txt)

//2
var dollars = [23000, 45000, 67000]
var result = 89
for (var i = 0; i < dollars.length; i++) {
    dollars[i] *= result
}
console.log(dollars)

//3
var courses = {
    javaScript: ['Ruslan', 'Farida', 'Agzam', 'Marlen', 'Aidana'],
    python: ['Esen', 'Emir', 'Ismar', 'Elkhan'],
    java: ['Bektur', 'Aziz', 'Akai', ' Danil', 'Daniel'],
    ios: ['Akai', 'Danil', 'Daniel']
}

function add(courses){
    var count = {}
    for(var key in courses){
        count[key]= courses[key].length
    }
    return count
}

console.log(add(courses))



//4
var array = [3,4,5]
var getPosition = (element, array) => {
    for(var i = 0; i < array.length; i++){
        if(element === array[i]){
            return i
        }
    }
    return '404'
}
console.log(getPosition(4,array))