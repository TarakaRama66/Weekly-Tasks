import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div>
      {movies.slice(0,10).map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MovieList;