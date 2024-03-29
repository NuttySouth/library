const container = document.querySelector(".container");
const addBookBtn = document.querySelector('#create-book');
const submitBookBtn = document.getElementById('submit-book');
const closeFormBtn = document.getElementById('close-form');

closeFormBtn.addEventListener('click', closeForm);
addBookBtn.addEventListener('click', openForm);
submitBookBtn.addEventListener('click', addBook);

let library = [];

function addBook(event){
    event.preventDefault();    
    let bookName = document.getElementById('book-name').value;
    let bookAuthor = document.getElementById('book-author').value;
    let bookPages = document.getElementById('book-pages').value;
    let bookIsRead = document.getElementById('isReadValue').checked;
    let newBook = new Book(bookName, bookAuthor, bookPages, bookIsRead);
    library.push(newBook);
    closeForm();
    addBookDOM();
}

function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function addBookDOM(){
    clearContainer();
    for(let book of library){
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('card');
        let name = document.createElement('p')
        name.classList.add('name');
        name.textContent = book.getBookName();
        let author = document.createElement('p')
        author.classList.add('textElement');
        author.textContent = book.getBookAuthor();
        let pages = document.createElement('p')
        pages.classList.add('textElement');
        pages.textContent = book.getBookPagesString();
        let isRead = document.createElement('p');
        isRead.classList.add('textElement');
        isRead.textContent = book.getIsReadString();
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "X";
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.addEventListener('click', ()=>{
            let index = library.indexOf(book);
            library.splice(index,1);
            clearContainer();
            addBookDOM();
        });
        bookDiv.appendChild(deleteBtn);
        bookDiv.appendChild(name);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(isRead);
        container.appendChild(bookDiv);
    }    
}

function openForm(){
    document.getElementById('myForm').style.display ="block";
}

function closeForm(){
    document.getElementById('book-name').value = "";    
    document.getElementById('book-author').value = "";    
    document.getElementById('book-pages').value = "";    
    document.getElementById('isReadValue').checked = false;
    document.getElementById('myForm').style.display ="none";

}


class Book {
    constructor(bookName, bookAuthor, bookPages, isRead) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPages = bookPages;
        this.isRead = isRead;
    }
    getBookName() {
        return this.bookName;
    }
    getBookAuthor() {
        return this.bookAuthor;
    }
    getBookPages() {
        return this.bookPages;
    }
    getIsRead() {
        return this.isRead;
    }

    getBookPagesString(){
        return `${this.bookPages} pages`;
    }

    getIsReadString(){
        let response = this.isRead ? "You have read this book" : "You haven't read this book";
        return response;
    }
};





