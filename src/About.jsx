import react from './assets/react.svg'
import Navbar from "./Navbar"
function About(){
    return(
        <>
    <Navbar/> 
    <div><h1><img src={react} className="m-3 logo"/>About Page</h1>
    </div>
    <div id="card">
        <p>This an movie finder web app where users can actually can view the details about the movies such as </p>
            <ul>
            <li>Title</li>
            <li>Release Year</li>
            <li>Rating</li>
            <li>Director</li>
            <li>Actor</li>
            <li>Poster</li>
            <li>Genre</li>
            </ul>
</div>
        </>
    )
}
export default About