import ban from './assets/ban.svg'
import { Link } from "react-router-dom"
function  Notfound(){
    return(<>
    <img src={ban}/>
    <h1>ERROR 404 ! ....</h1>
    <h2>Page Not Found :)</h2>
    <h3>Please click the to treurn to home <Link to="/" className="btn btn-primary">Home</Link></h3>
</>)
}
export default Notfound