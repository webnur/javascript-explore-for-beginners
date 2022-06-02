
function feetToInch (feet){

    const perFeet = 12;
    const totalInch = perFeet * feet;
    return totalInch;
}

const inch = feetToInch(10);
console.log('ten feet = ', inch);