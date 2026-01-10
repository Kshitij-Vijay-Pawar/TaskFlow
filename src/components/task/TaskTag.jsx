import { useState } from "react";
import { TAG_COLOR_MAP } from "../../assets/tagColors";
import { NavLink } from "react-router";
import AddTagModal from "../ui/AddTagModal";

const TaskTag = ({ todo, tags, onUpdateTags }) => {
  const resolvedTags = tags.filter((tag) => todo.tags.includes(tag.id));
  const [showAddTagModal, setShowAddTagModal] = useState(false);

  return (
    <div className="flex mb-3 text-(--text) gap-2">
      <label className="w-1/5">Tags</label>

      <div className="flex flex-wrap">
        {resolvedTags.map((tag) => (
          <div
            key={tag.id}
            className={`${TAG_COLOR_MAP[tag.color]} rounded-md text-sm m-1 flex`}
          >
            <NavLink to={`/tag/${tag.id}`} className="px-3 py-1">
              {tag.name}
            </NavLink>

            <button
              onClick={() =>
                onUpdateTags(todo.tags.filter((id) => id !== tag.id))
              }
              className="border-l border-(--border) px-3 py-1"
            >
              ×
            </button>
          </div>
        ))}

        <div
          onClick={() => setShowAddTagModal(true)}
          className="px-2 py-1 m-1 hover:bg-(--border)
                     rounded-md bg-(--sidebar)
                     flex items-center cursor-pointer"
        >
          <svg className="w-3 h-3" viewBox="0 -960 960 960" fill="currentColor">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
          <p className="text-(--text-muted) text-sm ml-2">Add Tag</p>
        </div>

        {showAddTagModal && (
          <AddTagModal
            selectedTags={todo.tags}
            onSave={onUpdateTags}
            onClose={() => setShowAddTagModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default TaskTag;
