import { useParams } from "react-router";
import { useTodoContext } from "../../context/useTodoContext";
import ShowTask from "../ui/ShowTask";

const SearchResults = () => {
  const { q } = useParams(); // 👈 get query from URL
  const { selectedTodo, todos, loading, error, setSelectedTodo } = useTodoContext();
    const handleNewTask = () => {
    setSelectedTodo(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Normalize query
  const searchQuery = q?.toLowerCase().trim();

  // Filter todos by title + description
  const filteredTodos = todos.filter((todo) => {
    const text = `${todo.title} ${todo.description}`.toLowerCase();
    return text.includes(searchQuery);
  });

  return (
    <div>
      <div className="text-(--text)">
        <div className="flex justify-between mx-1">
          <div>
            <h2 className="text-6xl font-black">"{q}”</h2>
            <p className="mb-4 mt-2 ml-8 font-light text-(--text-muted)">Search results for</p>
          </div>
          <div className="text-6xl font-black">{todos.length}</div>
        </div>
        <div
          className={`border-y border-(--border) mt-9 p-4 flex hover:bg-(--hover) cursor-pointer rounded${
            selectedTodo?.id === null ? "bg-(--border)" : ""
          }`}
          onClick={handleNewTask}
        >
          <svg
            className="w-5 h-5 text-body my-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
          <p className="text-(--text-muted) ml-4 text-lg">Add New Task</p>
        </div>
        {filteredTodos.length === 0 ? (
          <p className="text-(--text-muted)">No tasks found</p>
        ) : (
          <ShowTask tasks={filteredTodos} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
