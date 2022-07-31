

let names = ['abul', 'babul', 'kabul', 'cabul', 'nabul', 'gabul', 'abul', 'tabul,', 'babul', 'nanul', 'babul', 'nabul', 'kabul']


function removeDuplicate (names){
    let uniqueName = [];

    // for(let i = 0; i < names.length; i++){
    //     const element = names[i]
    //     console.log(element);
    // }


    for(const element of names){
        console.log(element)

        if(uniqueName.indexOf(element) == -1){
            uniqueName.push(element)
        }
    }

    return uniqueName;
}

const uniqueNames = removeDuplicate(names)
console.log(uniqueNames)