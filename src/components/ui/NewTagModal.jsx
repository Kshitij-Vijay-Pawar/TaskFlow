import { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";

const COLORS = ["blue", "red", "yellow"];

const NewTagModal = ({ onClose, onCreate }) => {
  const { createTag } = useTodoContext();

  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");

  const handleCreate = async () => {
    if (!name.trim()) return;

    const id = `tag-${Date.now()}`;

    await createTag({
      id,
      name,
      color,
    });

    // 🔑 send tag ID back to parent
    onCreate(id);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-(--surface) rounded-xl p-5 w-80">
        <h3 className="text-lg font-bold mb-4">Create Tag</h3>

        <input
          type="text"
          placeholder="Tag name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-3 py-2 border border-(--border)"
        />

        <div className="flex gap-3 mb-4">
          {COLORS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`h-6 w-6 rounded-full border
                ${color === c ? "ring-2 ring-offset-2" : ""}
                ${c === "blue" ? "bg-(--tag-blue)" : ""}
                ${c === "red" ? "bg-(--tag-red)" : ""}
                ${c === "yellow" ? "bg-(--tag-yellow)" : ""}`}
            />
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-sm">
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-3 py-1 bg-(--primary) text-white rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTagModal;
