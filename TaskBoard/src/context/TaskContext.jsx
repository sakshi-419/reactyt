import { createContext, useReducer, useEffect } from "react";

export const TaskContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  logs: JSON.parse(localStorage.getItem("logs")) || [],
};

function taskReducer(state, action) {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case "MOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      };

    case "ADD_LOG":
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      };

    // ♻ RESET BOARD
    case "RESET_BOARD":
      return {
        tasks: [],
        logs: [],
      };

    default:
      return state;
  }
}

export const TaskProvider = ({ children }) => {

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // 💾 Sync to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    localStorage.setItem("logs", JSON.stringify(state.logs));
  }, [state]);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        logs: state.logs,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
