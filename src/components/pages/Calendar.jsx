import ShowTask from "../ui/ShowTask";
import { useTodoContext } from "../../context/useTodoContext";

// Group todos by dueDate
const groupTodosByDate = (todos) => {
  return todos.reduce((groups, todo) => {
    if (!todo.dueDate) return groups;

    if (!groups[todo.dueDate]) {
      groups[todo.dueDate] = [];
    }

    groups[todo.dueDate].push(todo);
    return groups;
  }, {});
};

// Sort dates (closest first)
const sortDatesAsc = (dates) =>
  dates.sort((a, b) => new Date(a) - new Date(b));

// Format date for UI
const formatDate = (date) =>
  new Date(date).toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });



const Calendar = () => {
  const { todos, loading, error } = useTodoContext();
  const groupedTodos = groupTodosByDate(todos);
  const sortedDates = sortDatesAsc(Object.keys(groupedTodos));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>

      {sortedDates.length === 0 && (
        <p className="text-(--text-muted)">
          No tasks with due dates
        </p>
      )}

      {sortedDates.map((date) => (
        <div key={date} className="mb-6">
          {/* Date Header */}
          <h2 className="text-lg font-semibold mb-2">
            {formatDate(date)}
          </h2>

          {/* Tasks for this date */}
          <ShowTask tasks={groupedTodos[date]} />
        </div>
      ))}
    </div>
  );
};

export default Calendar;
