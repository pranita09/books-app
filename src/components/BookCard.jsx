

const BookCard = ({book, isAddedToFav}) =>{

    const {id, title, author, publisher, year, image, price, read} = book;

    return(
        <div className="book-card">
            <img src={image} alt={title}/>
            <p>{id}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            { !read ? <button>Mark as Read</button> : <button disabled>Already Read</button>}
            { !isAddedToFav ? <button>Add to Fav</button> : <button>Go to Fav</button>}
        </div>
    )
}

export default BookCard;