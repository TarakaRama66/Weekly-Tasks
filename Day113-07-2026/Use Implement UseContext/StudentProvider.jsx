import { useState } from "react";
import StudentContext from "./StudentContext";

function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Gupta",
    course: "React JS",
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;