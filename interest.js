
function getInterest(amout, years) {

    let interest = amout / 10 * years;

    return interest;
                                       
}

let amounts = 1000;
let year = 2;

let interestMoney = getInterest(amounts, year)
console.log(interestMoney);