import {
  createContext,
  useContext,
  useReducer,
} from "react";

const DashboardContext = createContext(null);

const initialState = {
  employees: [
    { id: 1, name: "Rahul", departmentId: 1, salary: 45000 },
    { id: 2, name: "Priya", departmentId: 2, salary: 40000 },
  ],

  departments: [
    { id: 1, name: "Development" },
    { id: 2, name: "Testing" },
  ],

  notifications: [],

  loading: false,

  error: null,
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload,
        ],
        error: null,
        notifications: [
          ...state.notifications,
          {
            id: action.payload.id,
            message: `${action.payload.name} was added`,
          },
        ],
      };

    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
        notifications: [
          ...state.notifications,
          {
            id: Date.now(),
            message: "Employee deleted",
          },
        ],
      };

    case "ADD_DEPARTMENT":
      return {
        ...state,
        departments: [
          ...state.departments,
          action.payload,
        ],
        error: null,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    case "CLEAR_NOTIFICATIONS":
      return {
        ...state,
        notifications: [],
      };

    case "RESET_DASHBOARD":
      return initialState;

    default:
      return state;
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(
    dashboardReducer,
    initialState
  );

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (context === null) {
    throw new Error(
      "useDashboard must be used inside DashboardProvider"
    );
  }

  return context;
}