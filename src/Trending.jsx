import { useEffect, useState } from "react";
import Navbar from "./Navbar";
function Trending() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY ;

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        const data = await response.json();
        console.log(data);

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
   
    <div>
       <Navbar/>
      <h1 className="tm-h1">Trending Movies</h1>
  <div className="tm-card-container">
      {movies.map((movie) => (
      
        <div key={movie.id} className="tm-card">
          <h2 className="tm-title">{movie.title}</h2>
          <div className="img-div-trend">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title} className="tm-img"
          />
          </div>
          <p className="tm-overview">{movie.overview}</p>
          <p>Rating : {movie.vote_average}</p>
          <p>Release Date : {movie.release_date}</p>
        </div>
       
      ))}
    </div>
    </div>
  );
}

export default Trending;
