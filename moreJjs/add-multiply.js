
function woodCalculator(chairquantity, tableQuantity, bedQuantity){

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    // wood canculation
    const chairWoodQuantity = chairquantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);