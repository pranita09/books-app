import { NavLink } from "react-router-dom";
import { useBooks } from "../contexts/BooksContext";


const BookCard = ({book, isAddedToFav}) =>{

    const {id, title, author, publisher, year, image, price, read} = book;
    const {handleAddToFavBtn, handleReadToggleBtn, isBookInFav} = useBooks();

    return(
        <div className="book-card" key={id}>
            <img src={image} alt={title}/>
            <p>{id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            { !read ? <button onClick={()=> handleReadToggleBtn(book)}>Mark as Read</button> : <button disabled>Already Read</button>}
            { !isAddedToFav && 
                <button onClick={()=>handleAddToFavBtn(book)}>{ isBookInFav(book) ? <NavLink to='/favorites'>Go to Fav</NavLink> : ('Add to Fav')}</button>}
        </div>
    )
}

export default BookCard;