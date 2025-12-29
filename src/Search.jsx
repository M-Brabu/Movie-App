import clip from './assets/media-player.svg'
import Navbar from "./Navbar"
import { useState } from 'react'
import errorimg from './assets/errorimg.svg'
import load from './assets/coming-soon-loading.gif'
import noimage from './assets/no image.svg'
import { useNavigate } from 'react-router-dom'
function Search(){
  let navigate=useNavigate()
  let [movieName,setMovieName]=useState("")
  let [error,setError]=useState("")
  let [responser,setResponse]=useState("")
  let [movielist,setMovielist]=useState(null)
  let [loading,setLoading]=useState(false)
  const API_KEY=import.meta.env.VITE_OMDB_API_KEY
  function searchmovie(movieName){
        setMovielist(null)
        setLoading(true)
       fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${API_KEY}`)
      .then((response)=>{ return response.json();})
      .then((data)=>{setMovielist(data.Search);setLoading(false);setResponse(data.Response);console.log("kani",data);console.log(data.Response)})
      .catch((error)=>{console.log(error); setError(error)})
     
  }

    return(<>
    <Navbar />
    <img src={clip} className="logo m-3"/><span className="h1">Search Page</span>
    <div className='searchdiv'><input value={movieName} type="text"  onChange={(e)=>{setMovieName(e.target.value); console.log(e.target.value)}} placeholder='Type Movie Name here...' className='searchip m-4'/></div>
    <div id="searchbtndiv"><button className="searchbtn" onClick={()=>searchmovie(movieName)}>Click</button></div>
    { (responser==="False") &&  <><div className='notfound h1'> <img src={errorimg} alt="" /> Movie not found !!!</div> </>}
   {loading && <img className=" m-2 loading" src={load} alt="Loading...."/>}
   {movielist && movielist.map((movies)=>{
    return(<div className="card">

     <img className="poster" src={movies.Poster ==="N/A" ? noimage : movies.Poster} alt="No image Found"/>
      <div className='detailmovie'>
      <h2>Title : {movies.Title}</h2>
      <h6>Release : {movies.Year}</h6>
      <h6>Type(Movie or Web-Series) : {movies.Type}</h6>
      <h6>IMDB ID : {movies.imdbID}</h6>
      <button className='btn btn-info' onClick={()=>{navigate('/Detailer/'+movies.imdbID)}}>Details</button>

      </div>
    </div>
    )})  
  
}
   </>)
}
export default Search