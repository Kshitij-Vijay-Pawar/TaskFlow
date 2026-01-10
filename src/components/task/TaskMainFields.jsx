const TaskMainFields = ({ todo, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChange}
        required
        placeholder="Title"
        className="text-3xl font-bold mt-9 w-full outline-none focus:outline-none focus:ring-0"
      />

      <textarea
        name="description"
        value={todo.description}
        onChange={onChange}
        placeholder="Description"
        rows={5}
        className="w-full mt-4 outline-none focus:outline-none focus:ring-0"
      />
    </>
  );
};

export default TaskMainFields;
