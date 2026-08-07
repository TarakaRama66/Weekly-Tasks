function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>

      <button>Book Ticket</button>
      <hr></hr>
    </div>
  );
}

export default MovieCard;