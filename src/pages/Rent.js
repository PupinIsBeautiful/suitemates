import { Link } from "react-router-dom";
import '../assets/css/Login.css';
import '../assets/css/Home.css';
import Navbar from "../components/NavbarRentBlue";
import statusbar from '../assets/images/statusbar.png';



const Home = () => {
    return (
      <div className="App">
        <img alt='status bar for phone' src={statusbar}/>
        <h1>Rent stuff</h1>
       <Navbar />
      </div>
    );
  };
  
export default Home;