import { createContext, useReducer, useEffect } from "react";

export const TaskContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "MOVE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // ✅ SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
