import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskMetaFields = ({ todo, onPriorityChange, onChange }) => {
  return (
    <div className="w-full space-y-4 my-5">
      {/* Priority */}
      <div className="flex items-center gap-3">
        <label className="w-1/5">Priority</label>
        <div className="px-4 pl-1 pr-4 rounded-lg border border-gray-300">
          <select
            value={todo.priority}
            onChange={onPriorityChange}
            className="
          focus:outline-none focus:ring-0"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Custom Date Picker */}
      <div className="flex items-center gap-3">
        <label className="w-1/5">Due Date</label>

        <DatePicker
          selected={todo.dueDate ? new Date(todo.dueDate) : null}
          onChange={(date) =>
            onChange({
              target: { name: "dueDate", value: date },
            })
          }
          placeholderText="Select due date"
          className="px-4 py-1 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-gray-300 h-full flex items-center"
        />
      </div>
    </div>
  );
};

export default TaskMetaFields;
