import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

function Board() {
  const { tasks, dispatch } = useContext(TaskContext);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");

  const [showInput, setShowInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [dueDate, setDueDate] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [sortType, setSortType] = useState("default");

  // 🔓 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userEmail");
    navigate("/", { replace: true });
  };

  // ➕ ADD TASK
  const addTask = () => {
    if (!taskTitle.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: taskTitle,
        description,
        priority,
        dueDate,
        status: "todo",
        createdAt: new Date().toISOString(),
      },
    });

    setTaskTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
    setShowInput(false);
  };

  // 🖱 DRAG END
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    dispatch({
      type: "MOVE_TASK",
      payload: {
        id: Number(result.draggableId),
        status: result.destination.droppableId,
      },
    });
  };

  // 📦 FILTER + SORT
  const getTasks = (status) => {
    let data = tasks.filter(
      (task) =>
        task.status === status &&
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (priorityFilter === "all" || task.priority === priorityFilter)
    );

    if (sortType === "dueDate") {
      data.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    }

    return data;
  };

  // 🧱 COLUMN RENDER
  const renderColumn = (title, status) => (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          className="column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{title}</h2>

          {getTasks(status).map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <div
                  className="card task-card"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <p>{task.title}</p>

                  {task.description && <small>{task.description}</small>}

                  <span className={`priority ${task.priority}`}>
                    {task.priority}
                  </span>

                  {task.dueDate && <small>📅 {task.dueDate}</small>}

                  <button
                    className="delete-btn"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_TASK",
                        payload: task.id,
                      })
                    }
                  >
                    ✖
                  </button>
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder}

          {/* ➕ ADD TASK UI */}
          {status === "todo" &&
            (showInput ? (
              <div className="task-input-box">
                <input
                  type="text"
                  placeholder="Title"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />

                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>

                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />

                <button className="btn" onClick={addTask}>
                  Add Task
                </button>
              </div>
            ) : (
              <button
                className="btn add-task"
                onClick={() => setShowInput(true)}
              >
                + Add Task
              </button>
            ))}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="page">
      {/* 🔝 NAVBAR */}
      <div className="navbar">
        <h1 className="title">Task Board</h1>

        <div className="nav-controls">

          <input
            type="text"
            placeholder="Search task..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="dueDate">Due Date</option>
          </select>

          <span className="user-email">👤 {userEmail}</span>

          <button className="btn logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* 🧩 BOARD */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="board">
          {renderColumn("Todo", "todo")}
          {renderColumn("Doing", "doing")}
          {renderColumn("Done", "done")}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board;
