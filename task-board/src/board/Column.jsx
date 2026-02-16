
export default function Column({ column, tasks }) {
  const filtered = tasks.filter(t => t.status === column);

  return (
    <div>
      <h3>{column}</h3>
      {filtered.map(task => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
