import BookCard from "../components/BookCard";
import { useBooks } from "../contexts/BooksContext";

const Favorites = () =>{

    const {books} = useBooks();

    const favoriteBooks = books.filter((book)=> book.isFavorite);
    console.log(favoriteBooks)

    return(
        <>
            <h1>Favourite Books</h1>
            <div className='all-books'>
                {
                    favoriteBooks.map((book)=>{
                        return(
                            <BookCard key={book.id} book={book} isAddedToFav />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favorites;