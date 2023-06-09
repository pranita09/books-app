import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakefetch";

export const BooksContext = createContext();

export const BooksProvider = ({children})=>{

    const [books, setBooks] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() =>{
        setIsLoading(true);
        try {
            const response = await fakeFetch('https://example.com/api/books')
            if(response.status === 200){
                setBooks(response.data.books);
                setUser(response.data.user);
                setIsLoading(false);
            }
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const handleAddToFavBtn = (BookToAdd) =>{
        const updatedBooks = books.map((book)=> book.id === BookToAdd.id ? {...book, isFavorite: true} : book)
        setBooks(updatedBooks);
    }

    const isBookInFav = (bookToCheck) => {
        return books.find((book)=> book.id === bookToCheck.id).isFavorite
    }

    const handleReadToggleBtn = (bookToToggle) =>{
        const updatedBooks = books.map((book)=> book.id === bookToToggle.id ? {...book, read: !book.read} : book)
        setBooks(updatedBooks);
    }

    return(
        <BooksContext.Provider value={{ books, user, handleAddToFavBtn, handleReadToggleBtn, isBookInFav, isLoading}}>
            {children}
        </BooksContext.Provider>
    )
}

export const useBooks = () => useContext(BooksContext);