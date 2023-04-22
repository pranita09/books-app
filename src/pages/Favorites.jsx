import BookCard from "../components/BookCard";
import { useBooks } from "../contexts/BooksContext";

const Favorites = () =>{

    const {books, isLoading} = useBooks();

    const favoriteBooks = books.filter((book)=> book.isFavorite);

    return(
        <>
            <h1>Favourite Books</h1>
            {
                isLoading ? <h2>Loading...</h2> : (favoriteBooks.length === 0 ? <h2>Add some books to favorites!</h2> : (
                    <div className='all-books'>
                        {
                            favoriteBooks.map((book)=>{
                                return(
                                    <BookCard key={book.id} book={book} isAddedToFav />
                                )
                            })
                        }
                    </div>
                ) ) 
            }
            
        </>
    )
}

export default Favorites;