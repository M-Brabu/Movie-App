import {Link} from "react-router-dom"
import camera from "./assets/camera-reels-fill.svg"
function Navbar(){
    return(<>
    <div className="h1 " id="navheading"><div><img className="mx-3 logo" src={camera}/>Movie App<span> </span> </div>
    <div className="m-3 ">
      <Link to="/" className=" m-1 btn btn-primary" >HOME</Link>
      <Link to="/Search" className="m-1 btn btn-success">Search</Link>
      <Link to="/About" className="m-1 btn btn-danger">About</Link>
    </div>
     </div>
  
  
          </>)
}
export default Navbar