import { useEffect, useState } from "react";

import Header from "./Header";
import MovieList from "./MovieList";
import BookingForm from "./BookingForm";
import Error from "./Error";
import { getMovies } from "./Api";
import VipAccess from "./VipAccess";
const VIPMovieList = VipAccess(MovieList);
function MainApp() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMovies, setShowMovies] = useState(true);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();}, []);
  return (
    <div>
      <Header />
      <BookingForm />
      <hr></hr>
      <button onClick={() => setShowMovies(!showMovies)}>
        {showMovies ? "Hide Movies" : "Show Movies"}
      </button>
      <hr></hr>
      {loading ? (
        <h2>Loading Movies...</h2>
      ) : error ? (
        <Error message={error} />
      ) : showMovies ? (
        <VIPMovieList movies={movies} />
      ) : (
        <h2>Movies Hidden</h2>
      )}
    </div>
  );
}
export default MainApp;