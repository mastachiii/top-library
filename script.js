function Book (title, author, pages, status, cover){

    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.cover = cover;
}

function addBookToLibrary (){

    const title = document.getElementById('title')
        , author = document.getElementById('author')
        , pages = document.getElementById('pages')
        , status = document.getElementById('status')
        , cover = document.getElementById('cover');


    let book = new Book(title.value, author.value, pages.value, status.value, cover.value);
    
    booksArr.push(book);

    title.value = '';
    author.value = '';
    pages.value = '';
    status.value = '';
    cover.value = '';

    console.log(booksArr[0]);

    test = addBookToShelf(booksArr[booksArr.length - 1]);

    shelf.append(test);

    document.querySelectorAll('.delete-button').forEach((item) => {

        item.addEventListener('click', (e) => {

            removeBook(e.target);
        })
    });

    document.querySelectorAll('.done-button').forEach((item) => {

        item.addEventListener('click', (e) => {

            markBook(e.target);
        })
    })

}

function addBookToShelf (obj){

    const book = bookStyle.cloneNode(true);
    book.style.display = 'flex';

    // get fucked future me
    // pls refactor this 
    book.children[0].src = obj.cover;
    book.children[1].children[0].children[0].textContent = obj.title;
    book.children[1].children[1].children[0].textContent = obj.author;
    book.children[1].children[2].children[0].textContent = obj.pages;
    book.children[1].children[3].children[0].textContent = obj.status;

    return book
}

function removeBook (e){
    e.parentElement.parentElement.remove()
}

function markBook (e){

    const status = e.parentElement.parentElement.children[1].children[3].children[0];

    switch (status.textContent){

        case 'Read':

            status.textContent = 'Want to Read';
            break;

        case 'Want to Read':

            status.textContent = 'Currently Reading';
            break;

        case 'Currently Reading':
            
            status.textContent = 'Read';
    }
}

const modal = document.querySelector('dialog')
    , openModalButton = document.querySelector('.add-book-button')
    , closeModalButton = document.querySelector('.close-button')
    , addBookButton = document.querySelector('.add-book')
    , bookStyle = document.querySelector('.shelf > div')
    , shelf = document.querySelector('.shelf');

let booksArr = [];

openModalButton.addEventListener('click', () => {

    modal.showModal();
});

closeModalButton.addEventListener('click', () => {

    modal.close();
});







