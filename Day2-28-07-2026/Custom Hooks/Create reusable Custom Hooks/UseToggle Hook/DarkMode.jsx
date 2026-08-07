import useToggle from "./useToggle";

function DarkMode() {
  const [darkMode, toggleDarkMode] = useToggle();

  return (
    <>
      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>

      <h2>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </h2>
    </>
  );
}

export default DarkMode;