export async function getMovies() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  );

  if (!response.ok) {
    throw new Error("Unable to load movies");
  }

  return await response.json();
}