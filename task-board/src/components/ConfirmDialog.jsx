
const resetBoard = () => {
  if (confirm("Are you sure?")) {
    localStorage.removeItem("tasks");
    setTasks([]);
  }
};
