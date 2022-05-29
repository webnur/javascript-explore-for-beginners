

// fectorial use with for loop 

// function getFectorial(number){
//     let fectorial = 1;
//     for(let i = 1; i < number; i++){
//         fectorial = fectorial * i;
//     }
//     return fectorial;
// }

// let myFectorial = getFectorial(10)
// console.log('my fectorial is', myFectorial);



// fectorial use with while loop

// function getFectorial (number) {
//     let fectorial = 1;
//     let i = 1;
//     while(i <= number){
//         fectorial = fectorial * i;
//         i++
//     }

//     return fectorial
// }

// let myFectorial = getFectorial(10)
// console.log('my Fectorial is', myFectorial)



function anotherFectorial (num){
    
    let fect = 1;
    let i = num;

    while (i >= 1){
        fect = fect * i;
        i--;
    }

    return fect;
}

let myFect = anotherFectorial(6)
console.log('my fectorial is', myFect);



// for loop reverse 

// function getFectorial (number){

//     let fectorial = 1;
//     for(let i = number; i >= 1; i--){
//         fectorial = fectorial * i;
//     }

//     return fectorial;
// }

// let myFect = getFectorial(6)
// console.log('my fectorial is', myFect);