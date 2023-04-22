import BookCard from "../components/BookCard";
import { useBooks } from "../contexts/BooksContext";

const Read = () =>{
    const {books} = useBooks();

    const readBooks = books.filter(({read})=> read);

    return(
        <>
            <h1>Read Books</h1>
            <div className='all-books'>
                {
                    readBooks.map((book)=>{
                        return(
                            <BookCard key={book.id} book={book}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Read;