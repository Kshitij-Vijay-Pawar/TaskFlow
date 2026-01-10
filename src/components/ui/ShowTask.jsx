import React from "react";
import { useTodoContext } from "../../context/useTodoContext";

const ShowTask = ({ tasks }) => {
  const { todos, setSelectedTodo, selectedTodo } =
    useTodoContext();


  if (!tasks.length) {
    return <p className="text-(--text-muted)">No tasks found</p>;
  }

const handleClick = (item) => {
  setSelectedTodo(item);

  // open TaskDetails overlay on small screens
  if (window.innerWidth < 1536) {
    window.dispatchEvent(new Event("open-task"));
  }
};


  return (
    <div className="text-(--text)">
      {tasks.map((item, index) => (
        <div
          key={item.id}
          className={`border-b border-(--border) p-4 cursor-pointer rounded hover:bg-(--hover) ${selectedTodo?.id === item.id ? "bg-(--border)" : ""}`}
          // onClick={() => setSelectedTodo(item)}
          onClick={() => handleClick(item)}
        >
          <div className="flex">
            <input
              type="checkbox"
              name=""
              id=""
              className="bg-(--surface) ml-1 p-6"
            />
            <h3 className="ml-5 text-lg">{item.title}</h3>
          </div>
          <div className="flex">
            {item.dueDate ? (
              <div className="flex ml-8 border-r text-(--text-muted) border-(--border) pr-8 items-center">
                <svg
                  className="w-4 h-4 text-body my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="m388-212-56-56 92-92-92-92 56-56 92 92 92-92 56 56-92 92 92 92-56 56-92-92-92 92ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                </svg>
                <p className="ml-2 text-sm">{item.dueDate}</p>
              </div>
            ) : (
              ""
            )}

            {item.subtasks ? (
              <div className="flex ml-8 border-r text-(--text-muted) border-(--border) pr-8">
                <p className="text-xs  bg-(--surface) px-2 py-1 rounded">
                  {item.subtasks?.length}
                </p>
                <p className="ml-2">Subtask</p>
              </div>
            ) : (
              ""
            )}
            {item.priority ? (
              <div className="flex ml-8 text-(--text-muted)  pr-8">
                <div
                  className={`h-4 w-4 rounded-md mr-3 border-(--border) border 
                    ${item.priority === "high" ? "bg-(--high)" : ""}
                    ${item.priority === "medium" ? "bg-(--medium)" : ""} 
                    ${item.priority === "low" ? "bg-(--low)" : ""}`}
                />
                <p className="ml-2 capitalize">{item.priority} Priority</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTask;
