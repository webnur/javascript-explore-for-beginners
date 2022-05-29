

function gradeCalculation (examResoult){
    if(examResoult >= 80 && examResoult <= 100){
        console.log('you got a An + ');
    }
    else if (examResoult >= 75){
        console.log('you got an A ')
    }
    else if( examResoult >= 70){
        console.log('you got an only A')
    }
    else if (examResoult >= 65){
        console.log('You got B +')
    } 
    else if (examResoult >= 60){
        console.log('You got B')
    }
    else if (examResoult >= 55){
        console.log('You got B -')
    } 
    else if (examResoult >= 50){
        console.log('You got C +')
    }
    else if (examResoult >= 45){
        console.log('You got C')
    }
    else if (examResoult >= 40){
        console.log('You got C -')
    }
    else if (examResoult >= 35){
        console.log('You got D')
    }

    else {
        console.log('Baba tumi fail korecho. please aibar mon diye study koro. nahole basa theke ber kore dibo')
    }
}

gradeCalculation(34)


