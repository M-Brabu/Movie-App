import {Link} from "react-router-dom"
import movie from "./assets/movie.png"
function Navbar(){
    return(<>
    <div className='nav'>
    <div className="h1 mh " id="navheading">
      <img className="mx-3 logo" src={movie}/><div className="hunt">Movie Hunt</div>
     </div>
    <div className="m-3 mb ">
      <Link to="/" className=" m-1 btn btn-light" >HOME</Link>
      <Link to="/Search" className="m-1 btn btn-success">Search</Link>
      <Link to="/About" className="m-1 btn btn-danger">About</Link>
    </div> 
    </div>
   </>)
}
export default Navbar