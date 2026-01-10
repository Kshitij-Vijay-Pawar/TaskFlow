const todos = await getTodos();
await addTodo({ title: "Learn Axios", completed: false });
await updateTodo(1, { completed: true });
await deleteTodo(1);


const Calendardata = [
  [{ type: "date", id: "Date" }, { type: "number", id: "Completed" }],
  [new Date(2023, 2, 4), 10],
  [new Date(2023, 2, 5), 3],
  [new Date(2023, 2, 7), 1],
  [new Date(2023, 2, 8), 2],
  [new Date(2023, 2, 12), 1],
  [new Date(2023, 2, 13), 1],
  [new Date(2023, 2, 15), 1],
  [new Date(2023, 2, 16), 4],
];

