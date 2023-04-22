import BookCard from "../components/BookCard";
import { useBooks } from "../contexts/BooksContext";

const Home = () =>{

    const {books, isLoading} = useBooks();

    return(
        <>
            <h1>All Books</h1>
            { isLoading && (<h1>Loading...</h1>)}
            <div className='all-books'>
                {
                    books.map((book)=>{
                        return (
                          <BookCard key={book.id} book={book} />  
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;