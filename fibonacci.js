// 1, 0, 1, 2, 3, 5, 8, 21, 34, 55

/*
    3rd = 2nd + 1st
    4th = 3th + 2 nd
    5th = 4th + 3rd
    6th = 5th + 4 th
    16th = 15th + 14th
    119th = 118 th + 117th
    nth = (n - 1) th + (n - 2)th
    ith = (i -1) th + (i - 2) th
*/

// let fibo = [0, 1]
// for(let i = 2; i < 10; i++){

//     // nth = (n - 1) th + (n - 2)th
//     // ith = (i -1) th + (i - 2) th

//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// }

// console.log(fibo);


// function fibonacciSeries(num){
//     const fibo = [0, 1];
//     for(let i = 2; i < num; i++){
//         fibo[i] = fibo[i - 1] + fibo [i - 2]
//     }

//     return fibo
// }

// const fiboSeries = fibonacciSeries(15)
// console.log(fiboSeries)




function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'please gibe a number';
    }
    if(num < 2){
        return 'Please enter a positive number greater then 1'
    }
    const fibo = [0, 1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i - 1] + fibo [i - 2]
    }

    return fibo
}

const fiboSeries = fibonacciSeries(21)
console.log(fiboSeries)