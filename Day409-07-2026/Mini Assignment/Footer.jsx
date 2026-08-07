import { useTheme } from "./ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        marginTop: "20px",
        padding: "10px",
        background: "#ddd",
      }}
    >
      Current Theme : {theme}
    </footer>
  );
}

export default Footer;