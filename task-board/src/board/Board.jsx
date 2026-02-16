import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import { v4 as uuid } from "uuid";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

/* ================= INITIAL DATA ================= */

const initialData = {
  todo: [],
  doing: [],
  done: [],
};

export default function Board() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  /* ================= STATE ================= */

  const [tasks, setTasks] = useState(initialData);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [log, setLog] = useState([]);

  /* ================= LOAD FROM LOCALSTORAGE ================= */

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("board"));
    if (saved) setTasks(saved);
  }, []);

  /* ================= SAVE TO LOCALSTORAGE ================= */

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(tasks));
  }, [tasks]);

  /* ================= LOGOUT ================= */

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  /* ================= ACTIVITY LOG ================= */

  const addLog = msg => {
    setLog(prev => [{ id: uuid(), msg }, ...prev]);
  };

  /* ================= DRAG & DROP ================= */

  const onDragEnd = result => {
    if (!result.destination) return;

    const sourceCol = result.source.droppableId;
    const destCol = result.destination.droppableId;

    const sourceItems = [...tasks[sourceCol]];
    const [movedItem] = sourceItems.splice(result.source.index, 1);

    const destItems = [...tasks[destCol]];
    destItems.splice(result.destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [sourceCol]: sourceItems,
      [destCol]: destItems,
    });

    addLog("Task moved");
  };

  /* ================= SEARCH + FILTER + SORT ================= */

  const processTasks = list =>
    (list || [])
      .filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter(t =>
        priorityFilter ? t.priority === priorityFilter : true
      )
      .sort(
        (a, b) =>
          new Date(a.due || "9999-12-31") -
          new Date(b.due || "9999-12-31")
      );

  /* ================= UI ================= */

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>Task Board</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* CONTROLS */}
      <div className="controls">
        <input
          placeholder="Search..."
          onChange={e => setSearch(e.target.value)}
        />

        <select onChange={e => setPriorityFilter(e.target.value)}>
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="main">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="board">
            {Object.keys(tasks).map(col => (
              <Column
                key={col}
                column={col}
                tasks={processTasks(tasks[col])}
                allTasks={tasks}
                setTasks={setTasks}
                addLog={addLog}
              />
            ))}
          </div>
        </DragDropContext>

        {/* ACTIVITY PANEL */}
        <div className="activity">
          <h3>Activity</h3>
          {log.map(item => (
            <p key={item.id}>{item.msg}</p>
          ))}
        </div>
      </div>
    </>
  );
}

/* ========================================================= */
/* ================= COLUMN COMPONENT ======================= */
/* ========================================================= */

function Column({ column, tasks, allTasks, setTasks, addLog }) {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    priority: "low",
    due: "",
    tags: "",
  });

  /* ================= ADD TASK ================= */

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.title.trim()) return;

    const newTask = {
      ...form,
      id: uuid(),
      createdAt: new Date().toISOString(),
    };

    setTasks({
      ...allTasks,
      [column]: [...allTasks[column], newTask],
    });

    addLog("Task created");

    setForm({
      title: "",
      desc: "",
      priority: "low",
      due: "",
      tags: "",
    });
  };

  /* ================= DELETE TASK ================= */

  const deleteTask = id => {
    setTasks({
      ...allTasks,
      [column]: allTasks[column].filter(t => t.id !== id),
    });

    addLog("Task deleted");
  };

  return (
    <div className="column">
      <h3>{column.toUpperCase()}</h3>

      {/* TASK FORM */}
      <form onSubmit={handleSubmit} className="task-form">
        <input
          placeholder="Title"
          value={form.title}
          onChange={e =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Description"
          value={form.desc}
          onChange={e =>
            setForm({ ...form, desc: e.target.value })
          }
        />

        <select
          value={form.priority}
          onChange={e =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* MOBILE FRIENDLY DATE INPUT */}
        <input
          type="date"
          value={form.due}
          onChange={e =>
            setForm({ ...form, due: e.target.value })
          }
        />

        

        <button type="submit">Add</button>
      </form>

      {/* TASK LIST */}
      <Droppable droppableId={column}>
        {provided => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id}
                index={index}
              >
                {provided => (
                  <div
                    className={`task ${task.priority}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <h4>{task.title}</h4>
                    <p>{task.desc}</p>

                    <small>
                      Due:{" "}
                      {task.due
                        ? new Date(task.due).toLocaleDateString()
                        : "No date"}
                    </small>

                    <small>Tags: {task.tags || "None"}</small>

                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
