
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const submit = e => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");

    addTask({
      id: uuid(),
      title,
      createdAt: Date.now(),
      status: "todo",
    });

    setTitle("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button>Add</button>
    </form>
  );
}
