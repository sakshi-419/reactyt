
setLog(prev => [
  { message: "Task created", time: new Date() },
  ...prev,
]);
