import React from "react";
import ShowTask from "../ui/ShowTask";
import { useTodoContext } from "../../context/useTodoContext";

const Home = () => {
  const { setSelectedTodo, selectedTodo, todos, loading, error } = useTodoContext();

  const handleNewTask = () => {
    setSelectedTodo(null);
  };

 


  return (
    <div className="text-(--text)">
      <div className="flex justify-between mx-1">
        <h2 className="text-6xl font-black">All Tasks</h2>
        <div className="text-6xl font-black">{todos.length}</div>
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
      <ShowTask tasks={todos} />{" "}
       {/* if (loading) return <p>Loading...</p>; */}
  {/* if (error) return <p>Error</p>; */}
    </div>
  );
};

export default Home;
