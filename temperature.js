// function temperatureConverter(valNum) {
//     let fahrenheit = (valNum * 1.8) + 32;
//     return fahrenheit;
// }

// var fahrenheit = temperatureConverter(45);
// console.log(fahrenheit);




//℃=(℉-32)/1.8

function temperatureConverter(valNum) {
    let celsius = (valNum - 32) / 1.8;
    return celsius;
}

let celNum = temperatureConverter(50);
console.log(celNum);