import { useTodoContext } from "../../context/useTodoContext";
import ShowTask from "../ui/ShowTask";

const Today = () => {
  const { todos, selectedTodo, setSelectedTodo, loading, error } =
    useTodoContext();

  const handleNewTask = () => {
    setSelectedTodo(null);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error</p>;

  const today = new Date().toISOString().split("T")[0];
  const todayTasks = todos.filter((todo) => todo.dueDate === today);

  return (
    <div className="text-(--text)">
      <div className="flex justify-between mx-1">
        <h2 className="text-6xl font-black">Todays Tasks</h2>
        <div className="text-6xl font-black">{todayTasks.length}</div>
      </div>
      <div
        className={`border-y border-(--border) mt-9 p-4 flex hover:bg-(--hover) rounded${
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
      <ShowTask tasks={todayTasks} />{" "}
    </div>
  );
};

export default Today;
