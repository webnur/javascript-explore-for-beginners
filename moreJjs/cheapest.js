
let phones = [
    {name: 'oppo s1', price: 16000, camera: 16, storate: 32},
    {name: 'xaomi 9', price: 13000, camera: 8, storate: 64},
    {name: 'nokia w22', price: 6000, camera: 5, storate: 4},
    {name: 'walton v2', price: 33000, camera: 64, storate: 120},
    {name: 'tecno r3', price: 24000, camera: 32, storate: 80},
    {name: 'Iphone s6', price: 160000, camera: 80, storate: 250},

]


let cheapest = phones[0];

for(const phone of phones){

    // console.log(phone);
    if(phone.price < cheapest.price){
        cheapest = phone
    }
}

console.log(cheapest);


