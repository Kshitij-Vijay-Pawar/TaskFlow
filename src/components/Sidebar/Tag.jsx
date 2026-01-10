import { NavLink } from "react-router";
import { useTodoContext } from "../../context/useTodoContext";
import { TAG_COLOR_MAP } from "../../assets/tagColors";
import { useState } from "react";
import NewTagModal from "../ui/NewTagModal";

const SidebarTags = () => {
  const { tags, deleteTag } = useTodoContext();
  const [showNewTagModal, setShowNewTagModal] = useState(false);

  if (!tags.length) {
    return <p className="text-sm text-(--text-muted)">No tags</p>;
  }

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {tags.map((tag) => (
        <div key={tag.id} className={`${TAG_COLOR_MAP[tag.color]} rounded-md text-sm`}>
          <NavLink key={tag.id} to={`/tag/${tag.id}`} className="px-3 py-1">
            {tag.name}
          </NavLink>
          <button
            onClick={() => deleteTag(tag.id)}
            className="border-l border-(--border) px-3 py-1"
          >
            x
          </button>
        </div>
      ))}

      <div
        onClick={() => setShowNewTagModal(true)}
        className="px-2 py-1 hover:bg-(--border) rounded-md bg-(--sidebar) flex items-center cursor-pointer"
      >
        <svg className="w-3 h-3" viewBox="0 -960 960 960" fill="currentColor">
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
        <p className="text-(--text-muted) text-sm ml-2">New Tag</p>
      </div>

      {showNewTagModal && (
        <NewTagModal onClose={() => setShowNewTagModal(false)} />
      )}
    </div>
  );
};

export default SidebarTags;
