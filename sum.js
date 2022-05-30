

let numbers = [49, 40, 60, 68, 100]

// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     let element = numbers[1]
//     sum = sum + element
// }

// console.log(sum);

function arrayTotal (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i]
        sum = sum + element
    }

    return sum;
}


const arr = arrayTotal(numbers)
console.log(arr)