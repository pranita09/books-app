import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakefetch";

export const BooksContext = createContext();

export const BooksProvider = ({children})=>{

    const [books, setBooks] = useState([]);
    const [user, setUser] = useState({});

    const getData = async() =>{
        try {
            const response = await fakeFetch('https://example.com/api/books')
            if(response.status === 200){
                setBooks(response.data.books);
                setUser(response.data.user);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return(
        <BooksContext.Provider value={{ books, user}}>
            {children}
        </BooksContext.Provider>
    )
}