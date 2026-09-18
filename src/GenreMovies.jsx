import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function GenreMovies() {
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );

        const data = await response.json();

        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getGenres();
  }, [apiKey]);

  useEffect(() => {
    if (!selectedGenre) return;

    const getMoviesByGenre = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`
        );

        const data = await response.json();

        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMoviesByGenre();
  }, [selectedGenre, apiKey]);

  return (
    <div>
       <Navbar/>
      <h1 className="gen-h1">Movies by Genre</h1>
      <div className="genre-btn-container">
        {genres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
            className="gen-btn"
          >
            {genre.name}
          </button>
        ))}
      </div>
      <div>
        <div className="tm-card-container">
        {movies.map((movie) => (   
          <div className="tm-card" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} className="tm-img"
            />
            <h2 className="g-c">{movie.title}</h2>
            <p className="g-c">Ratings : {movie.vote_average.toFixed(1)}</p>
          </div>
         
        ))}
         </div>
      </div>
    </div>
  );
}

export default GenreMovies;
