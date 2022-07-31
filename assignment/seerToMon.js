

function seerToMon (seer){
   const  perMoon = 40;

    const totalMon = seer / perMoon;

    return totalMon;
}

const seers = seerToMon(230)
console.log('200 kg = ', seers, 'mon');