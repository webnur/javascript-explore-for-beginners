

function centimeterToMeter(centimeter){
    const perCentimeter = 100;
    const totalCentimeter = centimeter / perCentimeter;
    return totalCentimeter;
}

const meter = centimeterToMeter(500);
console.log('meter =', meter);