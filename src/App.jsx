import "./index.css";
import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=3acda63c";
// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    fetchMovie("fast");
  }, []);
  return (
    <div className="app">
      <h1>MKRS MOVIES</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchMovie(searchTerm)}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
