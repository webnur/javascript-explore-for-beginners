
function totalSales(shirt, shoes, pant){
    const shirtPrice = 100;
    const shoesPrice = 200;
    const pantPrice = 500;


    const shirtTotalPrice = shirtPrice * shirt;
    const shoesTotalPrice = shoesPrice * shoes;
    const pantTotalPrice = pantPrice * pant;

    const totalPrice = shirtTotalPrice + shoesTotalPrice + pantTotalPrice;
    return totalPrice;

 }

 const shirtSales = 10;
 const shoesSales = 20;
 const pantSales = 40;

 const totalSale = totalSales(shirtSales, shirtSales, pantSales)

 console.log('total sales in day: ', totalSale, 'Taka');