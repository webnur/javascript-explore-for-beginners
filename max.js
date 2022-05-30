
let minister = 500;
let army = 450;
let pulish = 400;

// if(minister > army && minister > pulish){
//     console.log('minister is higher');
// }
// else if (army > pulish && army > minister) {
//     console.log('army is higher')
// }
// else if (pulish > army && pulish > minister) {
//     console.log('pulish is higher')
// }


let max = Math.max(minister, army, pulish)
console.log('max higher number is', max)

function findLargest (first, second){
    if(first > second){
        return first
    } else {
        return second
    }
}


const largeNumber = findLargest(10, 20)
console.log('Largest Number is', largeNumber);