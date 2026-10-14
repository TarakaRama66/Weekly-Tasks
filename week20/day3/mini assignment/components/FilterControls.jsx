
import { memo } from "react";

const FilterControls = memo(function FilterControls({
  search,
  department,
  sortBy,
  onSearch,
  onDepartment,
  onSort,
  onReset,
}) {
  console.log("FilterControls rendered");

  return (
    <section>
      <h2>Search and Filter</h2>

      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search employee name or email"
      />

      <select
        value={department}
        onChange={(event) => onDepartment(event.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Testing">Testing</option>
        <option value="Design">Design</option>
        <option value="HR">HR</option>
        <option value="DevOps">DevOps</option>
      </select>

      <select
        value={sortBy}
        onChange={(event) => onSort(event.target.value)}
      >
        <option value="name">Sort by Name</option>
        <option value="salary">Sort by Salary</option>
        <option value="experience">Sort by Experience</option>
      </select>

      <button onClick={onReset}>Reset Filters</button>
    </section>
  );
});

export default FilterControls;