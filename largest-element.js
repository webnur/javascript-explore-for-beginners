
function largestElement(numbers){

    // let largest = 0;
    let largest = numbers[0]

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if(element > largest){
            largest = element;
        }
    }

    return largest;
}

const ages = [15, 17, 30, 34, 75, 55, 70]
const oldest = largestElement(ages)
console.log('oldest ', oldest);