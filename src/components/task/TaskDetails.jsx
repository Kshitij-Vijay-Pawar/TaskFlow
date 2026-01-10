import { useState, useEffect } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import TaskMainFields from "./TaskMainFields";
import TaskMetaFields from "./TaskMetaFields";
import SubtaskSection from "./SubtaskSection";
import TaskTag from "./TaskTag";

const initialState = {
  title: "",
  description: "",
  priority: "medium",
  dueDate: "",
  tags: [],
  subtasks: [],
};

const TaskDetails = ({ onClose }) => {
  const [todo, setTodo] = useState(initialState);
  const [subtaskTitle, setSubtaskTitle] = useState("");
  const [showTagModal, setShowTagModal] = useState(false);
  const { selectedTodo, addTodo, updateTodo, tags } = useTodoContext();

  useEffect(() => {
    selectedTodo ? setTodo(selectedTodo) : setTodo(initialState);
  }, [selectedTodo]);

  const handleChange = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  const handlePriorityChange = (e) =>
    setTodo({ ...todo, priority: e.target.value });

  const addSubtask = () => {
    if (!subtaskTitle.trim()) return;
    setTodo({
      ...todo,
      subtasks: [
        ...todo.subtasks,
        { id: Date.now(), title: subtaskTitle, completed: false },
      ],
    });
    setSubtaskTitle("");
  };

  const removeSubtask = (id) =>
    setTodo({
      ...todo,
      subtasks: todo.subtasks.filter((s) => s.id !== id),
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    selectedTodo
      ? await updateTodo(selectedTodo.id, todo)
      : await addTodo({ ...todo, status: "pending" });

    setTodo(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full"
    >
      <h2 className="text-6xl font-extrabold">Task</h2>
            {/* Mobile Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="mb-4 text-sm text-(--text-muted)"
        >
          ← Back
        </button>
      )}

      <TaskMainFields todo={todo} onChange={handleChange} />

      <TaskMetaFields
        todo={todo}
        onChange={handleChange}
        onPriorityChange={handlePriorityChange}
      />

      <TaskTag
  todo={todo}
  tags={tags}
  onUpdateTags={(tagIds) =>
    setTodo((prev) => ({ ...prev, tags: tagIds }))
  }
/>

      <div className=" flex flex-col h-[56%] justify-between">

      <SubtaskSection
        subtasks={todo.subtasks}
        subtaskTitle={subtaskTitle}
        setSubtaskTitle={setSubtaskTitle}
        addSubtask={addSubtask}
        removeSubtask={removeSubtask}
        />

      <button type="submit" className="w-full mt-6 hover:bg-amber-400 py-2 rounded-lg hover:text-white bg-(--border)">
        {selectedTodo ? "Update Todo" : "Add Todo"}
      </button>
        </div>
    </form>
  );
};

export default TaskDetails;
