import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
function Detailer(){
    let [moviedetail,setMoviedetail]=useState(null)
    let {imdbId}=useParams()
    const API_KEY=import.meta.env.VITE_OMDB_API_KEY
    useEffect(()=>{
    fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=${API_KEY}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setMoviedetail(data)})
    .catch((error)=>{console.log(error)})
    },[imdbId])
    
    return(<>
    {console.log(moviedetail)}
      <Navbar/>
    {moviedetail &&
  
     <div className=" card ">  
         <img src={moviedetail.Poster} className="poster" alt="" />
         <div className="detailmovie">
         <h1>Title : {moviedetail.Title}</h1> 
         <h6>Type : {moviedetail.Type}</h6> 
         <h6>Director : {moviedetail.Director}</h6>
         <h6>Actors : {moviedetail.Actors}</h6> 
         <h6>story : {moviedetail.Plot}</h6> 
         <h6>Year : {moviedetail.Year}</h6> 
         <h6>Rating : {moviedetail.Rated}</h6> 
         <h6>IMDB : {moviedetail.imdbRating}</h6> 
         <h6>Released : {moviedetail.Released}</h6>
         <h6>Language : {moviedetail.Language}</h6> 
         <h6>Run time : {moviedetail.Runtime}</h6>  
         <h6>Box office : {moviedetail.BoxOffice}</h6>
         <h6>Genre : {moviedetail.Genre}</h6>   
         </div>
     </div>}
    </>)
    
}


export default Detailer