const greetings = 'Hello, how are you ?';

function reverseStirng(text){
    let reverse = '';
    for (letter of text){
        console.log(letter);
        reverse = reverse + letter;
    }
}

const reversed = reverseStirng(greetings)
console.log(reversed)