
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import {
  getEmployees,
  saveEmployees,
} from "../services/employeeService";

const EmployeeContext = createContext(null);

const initialState = {
  employees: [],
  loading: true,
  error: "",
  isAuthenticated: localStorage.getItem("employeeAuth") === "true",
};

function employeeReducer(state, action) {
  switch (action.type) {
    case "LOAD_SUCCESS":
      return {
        ...state,
        employees: action.payload,
        loading: false,
        error: "",
      };

    case "LOAD_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "UPDATE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? action.payload
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

    case "SET_STATUS":
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id
            ? { ...employee, status: action.payload.status }
            : employee
        ),
      };

    case "LOGIN":
      return { ...state, isAuthenticated: true };

    case "LOGOUT":
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
}

export function EmployeeProvider({ children }) {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  useEffect(() => {
    let active = true;

    getEmployees()
      .then((employees) => {
        if (active) {
          dispatch({ type: "LOAD_SUCCESS", payload: employees });
        }
      })
      .catch(() => {
        if (active) {
          dispatch({
            type: "LOAD_ERROR",
            payload: "Unable to load employees. Please try again.",
          });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!state.loading && !state.error) {
      saveEmployees(state.employees);
    }
  }, [state.employees, state.loading, state.error]);

  function login(email) {
    localStorage.setItem("employeeAuth", "true");
    localStorage.setItem("employeeEmail", email);
    dispatch({ type: "LOGIN" });
  }

  function logout() {
    localStorage.removeItem("employeeAuth");
    localStorage.removeItem("employeeEmail");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <EmployeeContext.Provider
      value={{ state, dispatch, login, logout }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  const context = useContext(EmployeeContext);

  if (!context) {
    throw new Error(
      "useEmployeeContext must be used inside EmployeeProvider"
    );
  }

  return context;
}