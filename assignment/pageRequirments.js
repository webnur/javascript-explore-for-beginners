
function pageRequirments(book1, book2, book3){

    let bookOnePage = 100;
    let bookSecondPage = 200;
    let bookThirdPage = 300;

    const bookOneTotalPages = bookOnePage * book1;
    const bookTwoTotalPages = bookSecondPage * book2;
    const bookThirdtotalPages = bookThirdPage * book3;

    const totalPages = bookOneTotalPages + bookTwoTotalPages + bookThirdtotalPages

    return totalPages;
}

let mathBooks = 20;
let javaBook = 10;
let manyBook = 30
let books = pageRequirments(mathBooks, javaBook, manyBook)

console.log(books);