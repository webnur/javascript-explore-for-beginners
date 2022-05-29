

// celsius To Fahrenheit convertor


function celToFah (cel){

    let Fahrenheit = 33.8
    return Fahrenheit * cel;
}


let todayCel = celToFah(10)
console.log('today 10 celsius = ', todayCel , 'Fahrenheit');


// Fahrenheit to celsious  convertor

function fahTOCel (fahrenheit) {

    let celsious = fahrenheit / 33.8;
    return celsious;
}

let todayFah = fahTOCel(338)
console.log('338 fahrenheit = ', todayFah, 'celsious')