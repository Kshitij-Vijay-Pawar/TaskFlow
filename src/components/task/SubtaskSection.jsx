const SubtaskSection = ({
  subtasks,
  subtaskTitle,
  setSubtaskTitle,
  addSubtask,
  removeSubtask,
}) => {
  return (
    <div className="mt-7">
      <h3 className="text-3xl font-bold">Subtasks</h3>

      <div className="mt-5 flex justify-between">
        <input
          type="text"
          placeholder="Subtask title"
          value={subtaskTitle}
          onChange={(e) => setSubtaskTitle(e.target.value)}
          className="py-2 ml-3 w-2/3 outline-none focus:outline-none focus:ring-0"
        />
        <button
          type="button"
          onClick={addSubtask}
          className="px-6 w-1/3 ml-5 hover:bg-amber-400 py-2 rounded-lg hover:text-white bg-(--border)"
        >
          Add Subtask
        </button>
      </div>

      <ul className="mt-3">
        {subtasks.map((subtask) => (
          <li key={subtask.id} className="flex mt-3">
            <p className="ml-3 w-2/3">{subtask.title}</p>
            <button
              type="button"
              onClick={() => removeSubtask(subtask.id)}
              className="px-6 w-1/3 ml-5 hover:bg-rose-400 py-2 rounded-lg hover:text-white bg-(--border)"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubtaskSection;
