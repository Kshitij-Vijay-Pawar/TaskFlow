const getTaskCountByDate = (todos) => {
  const map = {};

  todos.forEach((todo) => {
    if (!todo.dueDate) return;

    if (!map[todo.dueDate]) {
      map[todo.dueDate] = 0;
    }

    map[todo.dueDate] += 1;
  });

  return map;
};

export default getTaskCountByDate;