import { useParams } from "react-router";
import { useTodoContext } from "../../context/useTodoContext";
import ShowTask from "../ui/ShowTask";

const Priority = () => {
  const { priority } = useParams();
  const { setSelectedTodo, selectedTodo, todos, loading, error } =
    useTodoContext();

  const handleNewTask = () => {
    setSelectedTodo(null);
  };



  const filteredTodos = todos.filter((todo) => todo.priority === priority);

  return (
    <div className="text-(--text) h-full">
      <div className="flex justify-between mx-1">
        <h2 className="text-6xl font-black capitalize">{priority} Priority</h2>
        <div className="text-6xl font-black">{filteredTodos.length}</div>
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

      {filteredTodos.length === 0 ? (
        <div className="h-4/5 flex justify-center items-center">
          <p className="text-(--text-muted) text-3xl font-bold">
            {priority === "complited"
              ? "Completed Your Task"
              : `No ${priority} priority tasks`}
          </p>
        </div>
      ) : (
        <ShowTask tasks={filteredTodos} />
      )}
    </div>
  );
};

export default Priority;
