console.clear()
class Booklist{
    constructor(){
        this.book = []
        this.favouriteBook=""
    }
    add(title,author){
        const newBook = {title, author}
        this.book.push(newBook)
    }
    setFavouriteBook(title){
        this.favouriteBook = title
    }
    getBookList(){
        console.log("Kitoblar ro'yxati : ")
        this.book.forEach(books =>{
            console.log(`${books.title}, mualllif: ${books.author}`)
        })
    }
    getFavouriteBook(){
        console.log(`Sevimli kitob : ${this.favouriteBook}`)
    }
}
let myBook = new Booklist()
myBook.add("O'tkir Xoshimov","O'tkir Hoshimov")
myBook.add("O'tmish Xatosi", "Jaloliddin Rumiy")
myBook.setFavouriteBook("O'tkir Xoshimov")
myBook.getBookList()
myBook.getFavouriteBook()