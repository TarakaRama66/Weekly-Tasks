import {
  createContext,
  useContext,
  useReducer,
} from "react";

const EmployeeContext = createContext(null);

const initialState = {
  employees: [
    {
      id: 1,
      name: "Rahul",
      department: "Development",
      salary: 45000,
    },
    {
      id: 2,
      name: "Priya",
      department: "Testing",
      salary: 40000,
    },
  ],
};

// Reducer
function employeeReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload,
        ],
      };

    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, ...action.payload }
            : employee
        ),
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "RESET_EMPLOYEES":
      return initialState;

    default:
      return state;
  }
}

// Context Provider
export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(
    employeeReducer,
    initialState
  );

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
}

// Custom Hook
export function useEmployees() {
  const context = useContext(EmployeeContext);

  if (context === null) {
    throw new Error(
      "useEmployees must be used inside EmployeeProvider"
    );
  }

  return context;
}