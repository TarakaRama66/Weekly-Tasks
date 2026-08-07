import ReactDOM from "react-dom/client";

import LoadApp from "./LoadApp";
import LoadersPlugins from "./LoadersPlugins";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <LoadApp />
    <LoadersPlugins />
  </>
);