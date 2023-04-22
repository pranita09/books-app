import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Read from "./pages/Read";
import Profile from "./pages/Profile";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/reads' element={<Read/>}  />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}
