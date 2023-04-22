import { useBooks } from "../contexts/BooksContext";

const Profile = () =>{
    const {user, isLoading} = useBooks();
    const {name, bio, img} = user;
    return(
        <>
            <h1>Profile</h1>
            {
                isLoading ? 
                    (<h2>Loading...</h2>) : 
                        (<>
                            <img src={img} alt='userPicture' width='300px' height='200px'/>
                            <h3>Name: {name}</h3>
                            <p><span style={{fontWeight: 'bold'}}>Bio:</span> {bio}</p>
                        </>)
            }  
        </>
    )
}

export default Profile;