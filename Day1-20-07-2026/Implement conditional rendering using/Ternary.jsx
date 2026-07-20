function Ternary() {
  const age = 20;

  return (
    <div>
        <h1>1.Implement conditional rendering using</h1>
      <h2>
        {age >= 18 ? "You can watch the movie.": "You are not allowed to watch the movie."}
      </h2>
    </div>
  );
}
export default Ternary;