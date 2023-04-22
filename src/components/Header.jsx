import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <>
            <nav>
                <NavLink to='/'>All Books</NavLink> ||
                <NavLink to='/favorites'> Favorites</NavLink> ||
                <NavLink to='/reads'> Read</NavLink> ||
                <NavLink to='profile'> Profile</NavLink>
            </nav>
        </>
    )
}

export default Header;