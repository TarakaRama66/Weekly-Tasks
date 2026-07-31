function SearchBar({ search, setSearch }) {
  return (
    <input
      placeholder="Search Employee"
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
  );
}
export default SearchBar;