import { NavLink } from "react-router-dom"
import { useBooks } from "../contexts/BooksContext";

const Header = () =>{
    const {books} = useBooks();
    const favBooksCount = books.reduce((acc, curr)=> curr.isFavorite ? acc+1 : acc,0)
    return(
        <>
            <nav>
                <NavLink to='/'>All Books</NavLink> ||
                <NavLink to='/favorites'> Favorites({favBooksCount})</NavLink> ||
                <NavLink to='/reads'> Read</NavLink> ||
                <NavLink to='profile'> Profile</NavLink>
            </nav>
        </>
    )
}

export default Header;