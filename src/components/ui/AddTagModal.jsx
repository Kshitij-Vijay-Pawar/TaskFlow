import { useState } from "react";
import { useTodoContext } from "../../context/useTodoContext";
import { TAG_COLOR_MAP } from "../../assets/tagColors";

const COLORS = ["blue", "red", "yellow"];

const AddTagModal = ({ selectedTags = [], onSave, onClose }) => {
  const { tags, createTag } = useTodoContext();

  // local selection state
  const [activeTags, setActiveTags] = useState(selectedTags);
  const [name, setName] = useState("");
  const [color, setColor] = useState("blue");

  // toggle tag selection
  const toggleTag = (tagId) => {
    setActiveTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  // create new tag
  const addTag = async () => {
    if (!name.trim()) return;

    const newTag = {
      id: `tag-${Date.now()}`,
      name,
      color,
    };

    await createTag(newTag);

    // auto-select newly created tag
    setActiveTags((prev) => [...prev, newTag.id]);
    setName("");
    setColor("blue");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-(--surface) rounded-xl p-5 w-96">
        <h3 className="text-lg font-bold mb-4">Manage Tags</h3>

        {/* Existing tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => {
            const isActive = activeTags.includes(tag.id);

            return (
              <div
                key={tag.id}
                onClick={() => toggleTag(tag.id)}
                className={`
                  ${TAG_COLOR_MAP[tag.color]}
                  px-3 py-1 rounded-md text-sm cursor-pointer
                  ${isActive ? "ring-2 ring-black/40" : "opacity-50"}
                `}
              >
                {tag.name}
              </div>
            );
          })}
        </div>

        {/* Create new tag */}
        <div className="border-t border-(--border) pt-3 mt-3">
          <input
            type="text"
            placeholder="New tag name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 px-2 py-1 border border-(--border)"
          />

          <div className="flex gap-2 mb-3">
            {COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                className={`
                  h-5 w-5 rounded-full border
                  ${TAG_COLOR_MAP[c]}
                  ${color === c ? "ring-2 ring-black" : ""}
                `}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addTag}
            className="text-sm px-3 py-1 bg-(--border) rounded"
          >
            Create Tag
          </button>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="text-sm">
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(activeTags);
              onClose();
            }}
            className="px-3 py-1 bg-(--primary) text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTagModal;
